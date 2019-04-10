import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { sign_out_user, turn_of_listener_and_clear_meeting_list,turn_of_listener_and_clear_answer_list,turn_of_listener_and_clear_question_list  } from './../../actions';

import {DashboardComponentContent} from './Dashboard.component';

class DashboardComponent extends Component {


    /**
    *  function to be called when a user press the sign-in button
    */
    _onSignOutClick = () => {
        this.props.turn_of_listener_and_clear_meeting_list();
        this.props.turn_of_listener_and_clear_answer_list();
        this.props.turn_of_listener_and_clear_question_list();
        this.props.sign_out_user (this.props.history);

    };

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


export default connect (mapStateToProp, {sign_out_user, turn_of_listener_and_clear_meeting_list, turn_of_listener_and_clear_answer_list, turn_of_listener_and_clear_question_list})(DashboardComponent);
