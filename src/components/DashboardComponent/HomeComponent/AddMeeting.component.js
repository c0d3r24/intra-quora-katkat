import React from 'react';

import {Button, FormTextInput} from './../../common';
import Calendar from 'react-calendar';

export const AddMeetingComponent = ({meetingPerson, process_user_input, save_meeting}) => {

    return (
        <div className="col-lg-12">
            <FormTextInput
                type="text"
                id="question"
                name="question"
                placeholder="Ex: Katkat"
                value={meetingPerson}
                onChange={(e)=> process_user_input('meetingPerson', e.target.value)}
                label="Enter Person name"
            />
            <Calendar onChange={date => process_user_input('meetingDate', date)}/>
            <Button onClick={save_meeting}>Save Meeting</Button>
        </div>
    )
};
