
import firebase from 'firebase';
import {
    ADD_ANSWER,ADD_QUESTION,
    QUESTION_SAVE_SUCCESS,
    TOGGLE_ADD_QUESTION_MODAL,
    CLEAR_QUESTION_LIST,
    QUESTION_RETRIEVE_SUCCESS,
    CLEAR_ANSWER_LIST,
    ANSWER_SAVE_SUCCESS
} from './types';



export const turn_of_listener_and_clear_question_list = () => async (dispatch) => {
    const firebaseDB = firebase.database();
    const route = "/questions";
    const ref = firebaseDB.ref(route);
    ref.off('child_added');
    dispatch({type: CLEAR_QUESTION_LIST, payload: []});
};

export const get_all_questions = () => async (dispatch, getState )=> {
    try{
        const firebaseDB = firebase.database();
        const route = "/questions";
        const ref = firebaseDB.ref(route);
        ref.on('child_added', snapshot => {
            const question = {key: snapshot.key, questionText : snapshot.val().questionText, user: snapshot.val().user};
            const state = getState();
            const {questionList} = state.questions;
            questionList.push(question);
            dispatch({type: ADD_QUESTION, payload: [...questionList]});
        });

    }
    catch(err){
        console.log(err);
    }
};

export const save_question = (questionText, showAddQuestionModal) => async dispatch => {
    try{
        const firebaseDB = firebase.database();
        const route = "/questions";
        const ref = firebaseDB.ref(route);
        const question = {user: firebase.auth().currentUser.uid, questionText};
        ref.push(question).then(data => {console.log(data); dispatch({type: QUESTION_SAVE_SUCCESS, payload: showAddQuestionModal})});
    }
    catch(err){
        console.log(err);
    }
};

export const toggle_add_question_modal = (showAddQuestionModal) =>{
    return({type:TOGGLE_ADD_QUESTION_MODAL, payload: showAddQuestionModal});
};


export const get_this_question_data = (questionId) =>
    async (dispatch , getState) => {
        const firebaseDB = firebase.database();
        //question data retrieval
        let route = `/questions/${questionId}`;
        let ref = firebaseDB.ref(route);
        ref.once('value')
            .then(snapshot => {
                dispatch({type: QUESTION_RETRIEVE_SUCCESS, payload: snapshot.val()});
            });

        //answers retrieval
        route = `/answers/${questionId}`;
        ref = firebaseDB.ref(route);

        ref.on('child_added', snapshot => {
            const answer = {key: snapshot.key, answerText : snapshot.val().answerText, user: snapshot.val().user};
            const state = getState();
            const {answerList} = state.questions;
            answerList.push(answer);
            dispatch({type: ADD_ANSWER, payload: [...answerList]});
        });
};

export const save_answer = (answerText, questionId) => async dispatch => {
    try{
        const firebaseDB = firebase.database();
        const route = `/answers/${questionId}`;
        const ref = firebaseDB.ref(route);
        const answer = {user: firebase.auth().currentUser.uid, answerText};
        ref.push(answer).then(data => {console.log(data); dispatch({type: ANSWER_SAVE_SUCCESS })});
    }
    catch(err){
        console.log(err);
    }
};
export const turn_of_listener_and_clear_answer_list = (questionId) => async (dispatch) => {
    const firebaseDB = firebase.database();
    const route = `/answers/${questionId}`;
    const ref = firebaseDB.ref(route);
    ref.off('child_added');
    dispatch({type: CLEAR_ANSWER_LIST, payload: []});
};