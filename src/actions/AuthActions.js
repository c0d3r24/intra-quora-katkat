import firebase from 'firebase';

import {
    USER_DETAILS,
    LOGIN_SUCCESS
} from './types';

export const user_input = ({prop, value}) => ({
    type: USER_DETAILS,
    payload: { prop, value}
});

export const sign_in_user = ({email, password}, history) => async dispatch => {
       try {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user);
                dispatch({type: LOGIN_SUCCESS});
                history.push('/dashboard');
            })
            .catch(err => console.log(err));
    } catch(err) {
        console.log(err);
    }
};


export const sign_out_user = (history) => async dispatch => {
    try {
            firebase.auth().signOut()
                .then( () => {
                history.push('/');
          })
          .catch(error => console.log(error));
    }catch(err) {}
}