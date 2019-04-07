import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { sign_out_user } from './../../actions';

import {DashboardComponentContent} from './Dashboard.component';

class DashboardComponent extends Component {


    /**
    *  function to be called when a user press the sign-in button
    */
    _onSignOutClick = () => this.props.sign_out_user (this.props.history);

    render() {
        return (
            <Fragment>
                <DashboardComponentContent
                    onSignOutClick={this._onSignOutClick}
                />
            </Fragment>
        )
    }
}

const mapStateToProp = () => {
    return {}
};


export default connect (mapStateToProp, {sign_out_user})(DashboardComponent);
