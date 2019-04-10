import React, {Component} from 'react';
import { connect } from 'react-redux';
import { user_input, save_meeting, turn_of_listener_and_clear_meeting_list, get_all_meetings} from './../../../actions';

import {HomeComponentContent} from './Home.component';

class HomeComponent extends Component {

    componentWillMount() {
        this.props.get_all_meetings();
    }
    componentWillUnmount() {
        this.props.turn_of_listener_and_clear_meeting_list();
    }
    /**
     * function to be called when a user enter anything in the text input
     */
    _process_user_input = (prop, value) => {this.props.user_input({prop,value});};
    /**
     *  function to be called when a user press the sign-in button
     */
    _onSubmitQuestionClick = () => this.props.save_meeting (this.props.meetingPerson, this.props.meetingDate);

    render() {
        return (
            <HomeComponentContent
                meetingDate={this.props.meetingDate}
                meetingPerson={this.props.meetingPerson}
                meetingList={this.props.meetingList}
                process_user_input={this._process_user_input}
                save_meeting={this._onSubmitQuestionClick}
            />
        )
    }
}

const mapStateToProp = ({meetings}) => {
    const { meetingPerson, meetingDate, meetingList } = meetings;
    return { meetingPerson, meetingDate, meetingList};
};


export default connect (mapStateToProp, {user_input, save_meeting, turn_of_listener_and_clear_meeting_list, get_all_meetings})(HomeComponent);
