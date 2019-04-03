import React from 'react';

import {Button, FormTextInput} from './../../common';

export const QuestionListComponent = ({questionList}) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="list-group">
                    {renderQuestionList(questionList)}
                </div>
            </div>
        </div>
    )
}

const renderQuestionList = (questionList) => {
    console.log('questionlist compoentn: ', questionList);
    return (
        questionList.map(question => <QuestionItem question={question} />)
    )
}
const QuestionItem = (question) =>{
    const { key, questionText, user} = question.question;
    const route = "/dashboard/question/key";
    return (
        <a href={route} className="list-group-item list-group-item-action flex-column align-items-start">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1" style={{color:'#000'}}>{questionText}</h5>
                <small>3 days ago: question key is : {key}</small>
            </div>
            <p className="mb-1">User ID: {user}</p>
            <small>this can be user's name.</small>
        </a>
    )
}


