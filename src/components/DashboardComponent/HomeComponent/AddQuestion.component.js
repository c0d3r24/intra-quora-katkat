import React from 'react';

import {Button, FormTextInput} from './../../common';

export const AddQuestionComponent = ({questionText, process_user_input, save_question, showAddQuestionModal,toggle_add_question_modal}) => {

    return (
        <div className="col-lg-12">
            <FormTextInput
                type="text"
                id="question"
                name="question"
                placeholder="Ex: How to create a react component"
                value={questionText}
                onChange={(e)=> process_user_input('questionText', e.target.value)}
                label="Enter Question"
            />
            <Button onClick={save_question}>Submit Question</Button>
            <Button onClick={()=>toggle_add_question_modal(showAddQuestionModal)}>Cancel</Button>
        </div>
    )
};
