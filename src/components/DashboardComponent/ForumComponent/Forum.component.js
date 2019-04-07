import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Modal} from "../../common";
import {AddQuestionComponent} from "./AddQuestion.component";
import {QuestionListComponent} from "./QuestionList.component";



export const ForumComponentContent = ({questionText, questionList, process_user_input, save_question, showAddQuestionModal, toggle_add_question_modal}) => {
    return (
        <div className="row">
            <div className="col-lg-10 col-md-10 offset-md-2 offset-lg-2">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Latest Questions</h2>
                        {/*<i className="fas fa-plus" style={{color: '#5cee33'}}></i>*/}
                        <FontAwesomeIcon icon="plus" style={{fontSize: '40px'}} onClick= {() => toggle_add_question_modal(showAddQuestionModal)} />
                        <Modal hidden={showAddQuestionModal}>
                            <AddQuestionComponent
                                questionText={questionText}
                                process_user_input={process_user_input}
                                save_question={save_question}
                                toggle_add_question_modal={toggle_add_question_modal}
                                showAddQuestionModal={showAddQuestionModal}
                            />
                        </Modal>
                        <QuestionListComponent
                            questionList={questionList}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};


