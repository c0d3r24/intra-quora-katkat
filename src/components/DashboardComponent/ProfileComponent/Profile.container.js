import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import {save_profile_data, user_input} from './../../../actions';

import {ProfileComponentContent} from './Profile.component';

class ProfileComponent extends Component {

     /**
     * function to be called when a user enter anything in the text input
     */
      _process_user_input = (prop, value) => this.props.user_input({prop,value});

    /**
    *  function to save profile data
    */
    _saveProfileData = () => {
        const {name,phone, position} = this.props;
        this.props.save_profile_data ({name, phone, position});
    }
    render() {
        return (
            <ProfileComponentContent
                process_user_input={this._process_user_input}
                saveProfileData={this._saveProfileData}
                name={this.props.name}
                phone={this.props.phone}
                position={this.props.position}
            />
        )
    }
}

const mapStateToProp = ({profile}) => {
    const {name, phone, position} = profile;
    return {
        name, phone, position
    }
}


export default connect (mapStateToProp, {save_profile_data, user_input })(ProfileComponent);
