import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import {
    user_input,
    save_question,
    toggle_add_question_modal,
    get_all_questions,
    turn_of_listener_and_clear_question_list
} from './../../../actions';



import {ForumComponentContent} from './Forum.component';


class ForumComponent extends Component {

    componentWillMount() {
        this.props.get_all_questions();
    }
    componentWillUnmount() {
        this.props.turn_of_listener_and_clear_question_list();
    }

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
            <ForumComponentContent
                questionText={this.props.questionText}
                questionList={this.props.questionList}
                process_user_input={this._process_user_input}
                save_question={this._onSubmitQuestionClick}
                toggle_add_question_modal={this.props.toggle_add_question_modal}
                showAddQuestionModal={this.props.showAddQuestionModal}
            />
        )
    }
}

const mapStateToProp = ({questions}) => {
    const { questionText, questionList, showAddQuestionModal } = questions;
    return { questionText, questionList , showAddQuestionModal};
};


export default connect (mapStateToProp, {user_input, save_question, toggle_add_question_modal, get_all_questions, turn_of_listener_and_clear_question_list})(ForumComponent);
