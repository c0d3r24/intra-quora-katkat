
import firebase from 'firebase';
import {
    ADD_MEETING,
    MEETING_SAVE_SUCCESS,
    CLEAR_MEETING_LIST,
} from './types';



export const turn_of_listener_and_clear_meeting_list = () => async (dispatch) => {

    const firebaseDB = firebase.database();
    const route = `/meetings/${firebase.auth().currentUser.uid}`;
    const ref = firebaseDB.ref(route);
    ref.off('child_added');
    dispatch({type: CLEAR_MEETING_LIST, payload: []});
};

export const get_all_meetings = () => async (dispatch, getState )=> {
    try{
        console.log(firebase.auth());
        const firebaseDB = firebase.database();
        console.log(firebase.auth().currentUser);
        const route = `/meetings/${firebase.auth().currentUser.uid}`;
        const ref = firebaseDB.ref(route);
        ref.on('child_added', snapshot => {
            console.log(snapshot.val());
            const meeting = {
                key: snapshot.key,
                meetingPerson : snapshot.val().meetingPerson,
                meetingDate: snapshot.val().meetingDate
            };
            const state = getState();
            const {meetingList} = state.meetings;
            meetingList.push(meeting);
            dispatch({type: ADD_MEETING, payload: [...meetingList]});
        });

    }
    catch(err){
        console.log(err);
    }
};

export const save_meeting = (meetingPerson, meetingDate) => async dispatch => {
    try{
        // console.log(meetingPerson, meetingDate); return;
        const firebaseDB = firebase.database();
        const route =  `/meetings/${firebase.auth().currentUser.uid}`;
        const ref = firebaseDB.ref(route);
        const meeting = {meetingPerson, meetingDate: meetingDate.toString()};
        ref.push(meeting).then(data => {console.log(data); dispatch({type: MEETING_SAVE_SUCCESS})});
    }
    catch(err){
        console.log(err);
    }
};
