
import {
    QUESTION_SAVE_SUCCESS,
    USER_DETAILS,
    ADD_QUESTION,
    TOGGLE_ADD_QUESTION_MODAL

} from './../actions/types'
const INITIAL_STATE = {
    questionText:'',
    questionList: [],
    showAddQuestionModal: true
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_DETAILS:
            const { prop, value } = action.payload;
            return {...state, [prop]: value};
        case QUESTION_SAVE_SUCCESS:
            return {...state, questionText: '', showAddQuestionModal: !action.payload };
        case ADD_QUESTION:
            return {...state, questionList: action.payload };
        case TOGGLE_ADD_QUESTION_MODAL:
            return {...state, showAddQuestionModal: !action.payload };
        default:
            return state;
    }
}