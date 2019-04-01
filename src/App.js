// importing required module
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import firebase from 'firebase';

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
            <Route exact path="/" component={LoginComponent} />
            <Route exact path="/dashboard" component={DashboardComponent} />
        </Fragment>
      </Router>
    );
  }
}



export default App;
