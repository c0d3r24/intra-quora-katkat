import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { user_input, save_question} from './../../../actions';

import {HomeComponentContent} from './Home.component';

class HomeComponent extends Component {
    /**
     * function to be called when a user enter anything in the text input
     */
    _process_user_input = (prop, value) => {console.log("you will see this in console.");this.props.user_input({prop,value});};
    /**
     *  function to be called when a user press the sign-in button
     */
    _onSubmitQuestionClick = () => this.props.save_question (this.props.questionText);

    render() {
        return (
            <HomeComponentContent
                questionText={this.props.questionText}
                questionList={this.props.questionList}
                process_user_input={this._process_user_input}
                save_question={this._onSubmitQuestionClick}

            />
        )
    }
}

const mapStateToProp = ({questions}) => {
    const { questionText, questionList } = questions;
    return { questionText, questionList };
};


export default connect (mapStateToProp, {user_input, save_question})(HomeComponent);
