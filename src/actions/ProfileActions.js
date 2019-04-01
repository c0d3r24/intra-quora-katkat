import firebase from 'firebase';

import {
    SAVE_SUCCESS
} from './types';

export const save_profile_data = (profileData) => async dispatch => {
    try{
        const path=`/users/${firebase.auth().currentUser.uid}/profile`
         firebase.database().ref(path)
                            .set(profileData)
                            .then (_ => {
                                dispatch({type: SAVE_SUCCESS, payload: {profileSavedMessage: "Save Successfully"}});
                            })
                            .catch( (err) => {console.log(err)});
    }
    catch(err){console.log(err);}
}
