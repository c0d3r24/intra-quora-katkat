import { combineReducers } from 'redux';

import AuthReducer from './AuthReducer';
import ProfileReducer from './ProfileReducer';
import QuestionReducer from './QuestionReducers';

export default combineReducers ({
    auth: AuthReducer,
    profile: ProfileReducer,
    questions: QuestionReducer
});