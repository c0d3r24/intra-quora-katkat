import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';


import ProfileComponent from './ProfileComponent/Profile.container';
import ForumComponent from './ForumComponent/Forum.container';
import SettingsComponent from './SettingsComponent/Settings.container';
import HomeComponent from './HomeComponent/Home.container'
import {LogoutComponent} from './Logout.component.js';
import {Button, FormTextInput} from './../common';

import './dashboard-custom-style.css';

export const DashboardComponentContent = ({onSignOutClick}) => {
    return (
        <div className="container-fluid" >

                <div className="wrapper">

                    <nav id="sidebar">
                        <div className="sidebar-header">
                            <h3>Intra Quora Katkat</h3>
                        </div>

                        <ul className="list-unstyled components">
                            <p>Let's start katkat</p>
                            <li className="active">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/profile">Profile</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/forum">Forum</Link>
                            </li>
                            <li>
                                <Link to="/dashboard/settings">Settings</ Link>
                            </li>
                        </ul>
                        <div className="row">
                            <LogoutComponent onSignOutClick={onSignOutClick} />
                        </div>
                    </nav>

                    <div id="content">

                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">

                                <button type="button" id="sidebarCollapse" className="btn btn-info">
                                    <i className="fas fa-align-left"></i>
                                    <span>Toggle Sidebar</span>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="primary-content">
                      <Switch>
                        <Route path="/dashboard" exact component={HomeComponent} />
                        <Route path="/dashboard/profile" exact component={ProfileComponent} />
                        <Route path="/dashboard/forum" exact component={ForumComponent} />
                        <Route path="/dashboard/settings" component={SettingsComponent} />
                      </Switch>
                </div>

        </div>
    )

}


