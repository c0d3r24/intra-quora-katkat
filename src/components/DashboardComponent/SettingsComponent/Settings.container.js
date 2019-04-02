import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';


import {SettingsComponentContent} from './Settings.component';

class SettingsComponent extends Component {


    render() {
        return (
            <SettingsComponentContent />
        )
    }
}

const mapStateToProp = ({}) => {

    return {}
}


export default connect (mapStateToProp)(SettingsComponent);
