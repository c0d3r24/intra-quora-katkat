// importing required module
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import firebase from 'firebase';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo, faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(faIgloo);

library.add(faPlus);
// importing firebase configuration
import {config} from './utils/firebase.config';

// importing components
import {DashboardComponent, LoginComponent} from './components';

class App extends Component {
  componentWillMount () {
    firebase.initializeApp(config);
    if(firebase.auth().user) {
        // we can fetch user data as the user is authenticated
    }
   }
  render() {
    return (
      <Router>
              <Fragment>
                <Switch>
                  <Route  exact path="/" component={LoginComponent} />
                  <Route  path="/dashboard" component={DashboardComponent} />
                  <Redirect to="/" />
                </Switch>
              </Fragment>
       </Router>
    );
  }
}



export default App;
