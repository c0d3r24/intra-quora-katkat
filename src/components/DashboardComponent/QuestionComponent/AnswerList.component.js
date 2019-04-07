import React from 'react';


const renderAnswerList = (answerList) => {
    return (
        answerList.map(answer => <AnswerItem answer={answer} />)
    )
};
const AnswerItem = (answer) =>{
    console.log(answer);
    const { key, answerText, user} = answer.answer;
    const route = `/dashboard/questions/${key}`;
    console.log(route);
    return (
        <div className="card">
            <div className="card-header">
                Submitted on : {Date.now()}
            </div>
            <div className="card-body">
                <h5 className="card-title">{answerText}</h5>
                <p className="card-text"> by {user} </p>
                <a href="#" className="btn btn-primary" style={{marginRight: 20}}>Like Answer</a>
                <a href="#" className="btn btn-primary">Dislike Answer</a>
            </div>
        </div>
    )
};


export const AnswerListComponent = ({answerList}) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="list-group">
                    {renderAnswerList(answerList)}
                </div>
            </div>
        </div>
    )
};




