import React, {Component} from 'react';
import { connect } from 'react-redux';

class SettingsComponent extends Component {

    /**
    *  function to be called when a user press the sign-in button
    */
    _onSignOutClick = () => this.props.sign_out_user (this.props.history);

    render() {
        return (
           <div>
            <h3>I am in Settings</h3>
           </div>
        )
    }
}

const mapStateToProp = () => {
    return {}
}


export default connect (mapStateToProp)(SettingsComponent);
