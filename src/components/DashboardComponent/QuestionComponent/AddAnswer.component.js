import React from 'react';

import {Button, FormTextInput} from './../../common';

export const AddAnswerComponent = ({answerText, process_user_input, save_answer}) => {

    return (
        <div className="col-lg-12">
            <FormTextInput
                type="text"
                id="question"
                name="question"
                placeholder="Ex: To create react component use creat-react-app-cli"
                value={answerText}
                onChange={(e)=> process_user_input('answerText', e.target.value)}
                label="Enter Question"
            />
            <Button onClick={save_answer}>Submit Answer</Button>
        </div>
    )
};
