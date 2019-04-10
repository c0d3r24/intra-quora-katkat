import React from 'react';
import {Link} from 'react-router-dom';

export const MeetingListComponent = ({meetingList}) => {
    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="list-group"><ul>
                    {renderMeetingList(meetingList)}</ul>
                </div>
            </div>
        </div>
    )
};

const renderMeetingList = (meetingList) => {

    return (
        meetingList.map(meeting => <MeetingItem meeting={meeting} />)
    )
};
const MeetingItem = (meeting) =>{
    console.log('from meetingItem', meeting);
    const { meetingPerson, meetingDate} = meeting.meeting;
    return (
        <li style={{display: 'inline-block', listStyle:'none', margin: 5, padding: 5 }}>
        <div className="card" style={{width: '18rem', display: 'inline-block'}}>
            <img className="card-img-top" src="https://images.unsplash.com/photo-1522881193457-37ae97c905bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="Card image cap" />
                <div className="card-body">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1" style={{color:'#000'}}>Meeting {meetingPerson}</h5>
                        </div>
                        <p className="mb-1"> on {meetingDate}</p>
                </div>
        </div>
        </li>
    )
}


