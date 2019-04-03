
import firebase from 'firebase';
import {ADD_QUESTION, QUESTION_SAVE_SUCCESS} from './types';
export const get_all_questions = () => async (dispatch, getState )=> {
    try{
        const firebaseDB = firebase.database();
        const route = "/questions";
        const ref = firebaseDB.ref(route);
        ref.on('child_added', snapshot => {
            const question = {key: snapshot.key, questionText : snapshot.val().questionText, user: snapshot.val().user};
            const state = getState();
            const {questionList} = state.questions;
            console.log(questionList);
            questionList.push(question);
            //newToDoAdded(dispatch, getState, todoObject);
            dispatch({type: ADD_QUESTION, payload: [...questionList]});
        });
    }
    catch(err){
        console.log(err);
    }
};

export const save_question = (questionText) => async dispatch => {
    try{
        console.log(questionText);
        const firebaseDB = firebase.database();
        const route = "/questions";
        const ref = firebaseDB.ref(route);
        const question = {user: firebase.auth().currentUser.uid, questionText};
        ref.push(question).then(data => {console.log(data); dispatch({type: QUESTION_SAVE_SUCCESS})});
    }
    catch(err){
        console.log(err);
    }
};


// const newToDoAdded = (dispatch, getState, todo) => {
//     const state = getState();
//     const {todoList} = state.project;
//     todoList.push(todo);
//     console.log(state);
//     dispatch({type: ADD_TODO, payload: [...todoList]});
// }