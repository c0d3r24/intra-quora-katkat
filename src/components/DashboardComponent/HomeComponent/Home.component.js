import React from 'react';
import {Modal} from './../../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {QuestionListComponent} from './QuestionList.component';
import {AddQuestionComponent} from './AddQuestion.component';
export const HomeComponentContent = ({questionText, questionList, process_user_input, save_question, showAddQuestionModal}) => {
    return (
        <div className="row">
                            <div className="col-lg-10 col-md-10 offset-md-2 offset-lg-2">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                            <h2>Latest Questions</h2>
                                        {/*<i className="fas fa-plus" style={{color: '#5cee33'}}></i>*/}
                                            <FontAwesomeIcon icon="igloo" />
                                               {/*<Modal hidden={showAddQuestionModal}>*/}
                                               {/*    <AddQuestionComponent*/}
                                               {/*         questionText={questionText}*/}
                                               {/*         process_user_input={process_user_input}*/}
                                               {/*         save_question={save_question}*/}
                                               {/*     />*/}
                                               {/*</Modal>*/}
                                                <QuestionListComponent
                                                    questionList={questionList}
                                                />
                                    </div>
                                </div>
                            </div>
                </div>
    )
}


