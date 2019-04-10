import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import QuestionReducer from './QuestionReducer';
import MeetingReducer from './MeetingReducer';

export default combineReducers ({
    auth: AuthReducer,
    profile: ProfileReducer,
    questions: QuestionReducer,
    meetings: MeetingReducer
});