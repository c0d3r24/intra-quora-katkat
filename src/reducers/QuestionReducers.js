
import {
    QUESTION_SAVE_SUCCESS,
    USER_DETAILS,
    ADD_QUESTION

} from './../actions/types'
const INITIAL_STATE = {
    questionText:'',
    questionList: [],
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_DETAILS:
            const { prop, value } = action.payload;
            return {...state, [prop]: value};
        case QUESTION_SAVE_SUCCESS:
            return {...state, questionText: ''};
        case ADD_QUESTION:
            return {...state, questionList: action.payload };
        default:
            return state;
    }
}