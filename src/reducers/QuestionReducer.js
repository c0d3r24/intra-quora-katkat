
import {
    QUESTION_SAVE_SUCCESS,
    USER_DETAILS,
    ADD_QUESTION,
    TOGGLE_ADD_QUESTION_MODAL,
    CLEAR_QUESTION_LIST,
    ADD_ANSWER,
    CLEAR_ANSWER_LIST,
    QUESTION_RETRIEVE_SUCCESS, ANSWER_SAVE_SUCCESS

} from './../actions/types'
const INITIAL_STATE = {
    questionText:'',
    questionList: [],
    showAddQuestionModal: true,
    answerText: '',
    question: {},
    answerList: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_DETAILS:
            const { prop, value } = action.payload;
            return {...state, [prop]: value};
        case QUESTION_RETRIEVE_SUCCESS: return {...state, question: action.payload};
        case QUESTION_SAVE_SUCCESS: return {...state, questionText: '', showAddQuestionModal: !action.payload };

        case ADD_QUESTION: return {...state, questionList: action.payload };
        case TOGGLE_ADD_QUESTION_MODAL: return {...state, showAddQuestionModal: !action.payload };
        case CLEAR_QUESTION_LIST: return {...state, questionList: action.payload};
        case ADD_ANSWER: return {...state, answerList: action.payload};
        case ANSWER_SAVE_SUCCESS: return {...state, answerText: ''};
        case CLEAR_ANSWER_LIST: return {...state, answerList: action.payload, question: {}};
        default: return state;
    }
}