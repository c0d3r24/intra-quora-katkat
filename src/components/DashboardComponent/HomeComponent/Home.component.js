import React from 'react';

import {QuestionListComponent} from './QuestionList.component';
import {AddQuestionComponent} from './AddQuestion.component';
export const HomeComponentContent = ({questionText, questionList, process_user_input, save_question}) => {
    return (
        <div className="row">
                            <div className="col-lg-10 col-md-10 offset-md-2 offset-lg-2">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12">
                                            <h2>Latest Questions</h2>
                                                <AddQuestionComponent
                                                    questionText={questionText}
                                                    process_user_input={process_user_input}
                                                    save_question={save_question}
                                                />
                                                <QuestionListComponent
                                                    questionList={questionList}
                                                />
                                    </div>
                                </div>
                            </div>
                </div>
    )
}


