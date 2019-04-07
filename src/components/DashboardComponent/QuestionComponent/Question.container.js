import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    user_input,
    save_answer,
    toggle_add_question_modal,
    get_this_question_data,
    turn_of_listener_and_clear_answer_list
} from './../../../actions';



import {QuestionComponentContent} from './Question.component';


class QuestionComponent extends Component {

    componentWillMount() {
        const questionId = this.props.location.pathname.split("/")[3];
        this.props.get_this_question_data(questionId);
    }
    componentWillUnmount() {
        this.props.turn_of_listener_and_clear_answer_list();
    }

    /**
     * function to be called when a user enter anything in the text input
     */
    _process_user_input = (prop, value) => {console.log("you will see this in console.");this.props.user_input({prop,value});};
    /**
     *  function to be called when a user press the sign-in button
     */
    _onSubmitQuestionClick = () => this.props.save_answer (this.props.answerText, this.props.location.pathname.split("/")[3]);

    render() {
        return (
            <QuestionComponentContent
                answerText={this.props.answerText}
                answerList={this.props.answerList}
                process_user_input={this._process_user_input}
                save_answer={this._onSubmitQuestionClick}
                question={this.props.question}
            />
        )
    }
}

const mapStateToProp = ({questions}) => {
    const { answerText, question, answerList } = questions;
    return { answerText, question, answerList };
};


export default connect (mapStateToProp, {user_input, save_answer, toggle_add_question_modal, get_this_question_data, turn_of_listener_and_clear_answer_list})(QuestionComponent);
