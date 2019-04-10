import React from 'react';

import {AddMeetingComponent} from "./AddMeeting.component";
import {MeetingListComponent} from "./MeetingList.component";

export const HomeComponentContent = ({meetingPerson, meetingDate, meetingList, process_user_input, save_meeting}) => {
    return (
        <div className="row">
            <div className="col-lg-10 col-md-10 offset-md-2 offset-lg-2">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2>Your Schedule Meetings</h2>

                            <AddMeetingComponent
                                meetingPerson={meetingPerson}
                                meetingDate={meetingDate}
                                process_user_input={process_user_input}
                                save_meeting={save_meeting}
                            />
                        <MeetingListComponent
                            meetingList={meetingList}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}


