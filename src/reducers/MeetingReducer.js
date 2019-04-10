
import {
    USER_DETAILS,
    MEETING_SAVE_SUCCESS, ADD_MEETING, CLEAR_MEETING_LIST

} from './../actions/types'
const INITIAL_STATE = {
    meetingPerson:'',
    meetingDate: new Date(),
    meetingList: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_DETAILS:
            const { prop, value } = action.payload;
            return {...state, [prop]: value};
        case MEETING_SAVE_SUCCESS: return {...state, meetingPersonText: '' };
        case ADD_MEETING: return {...state, meetingList: action.payload };
        case CLEAR_MEETING_LIST: return {...state, meetingList: action.payload};
        default: return state;
    }
}