import React from 'react';

import {Link} from 'react-router-dom';

import ProfileComponent from './ProfileComponent/Profile.container';
import ForumComponent from './ForumComponent/Forum.container';
import SettingsComponent from './SettingsComponent/Settings.container';
import {LogoutComponent} from './Logout.component.js';
import {Button, FormTextInput} from './../common';


export const DashboardComponentContent = ({onSignOutClick}) => {
    return (
        <div className="container-fluid" >
              <div className="row">
                    <LogoutComponent onSignOutClick={onSignOutClick} />
              </div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Profile</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Forum</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Settings</a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <ProfileComponent />
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <ForumComponent />
                  </div>
                  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <SettingsComponent />
                  </div>
               </div>

        </div>
    )

}


