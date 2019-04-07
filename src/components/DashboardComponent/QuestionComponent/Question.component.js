import React from 'react';

import {AddAnswerComponent} from "./AddAnswer.component";
import {AnswerListComponent} from "./AnswerList.component";

export const QuestionComponentContent = ({answerText, process_user_input,save_answer, answerList, question}) => {
    console.log(question);
    return (
        <div className="row">
            <div className="col-lg-10 col-md-10 offset-md-2 offset-lg-2">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>{question.questionText}</h2>
                        <p> by {question.user}</p>
                        <AddAnswerComponent
                            answerText={answerText}
                            process_user_input={process_user_input}
                            save_answer={save_answer}
                        />
                        <AnswerListComponent
                            answerList={answerList}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
};


