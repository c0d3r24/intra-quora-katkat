import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { user_input, sign_in_user} from './../../actions';

import {LoginComponentContent} from './Login.component';


class LoginComponent extends Component {
    /**
    * function to be called when a user enter anything in the text input
    */
    _process_user_input = (prop, value) => this.props.user_input({prop,value});

    /**
    *  function to be called when a user press the sign-in button
    */
    _onSignInClick = () => this.props.sign_in_user (
      {email:this.props.email, password:this.props.password},
      this.props.history
      );


    render() {
        return (
                <LoginComponentContent
                    process_user_input={this._process_user_input}
                    onSignInClick = {this._onSignInClick}
                    email={this.props.email}
                    password={this.props.password}
                />
        )
    }
}

const mapStateToProp = ({auth}) => {
    const {email, password} = auth;
    return {
        email,
        password
    }
}


export default connect (mapStateToProp, {user_input, sign_in_user})(withRouter(LoginComponent));

