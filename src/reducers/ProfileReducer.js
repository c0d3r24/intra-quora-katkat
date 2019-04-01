
import {
  SAVE_SUCCESS,
  USER_DETAILS

} from './../actions/types'
const INITIAL_STATE = {
    name:'',
    phone:'',
    position:'',
    profileSavedMessage: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case USER_DETAILS:
                const { prop, value } = action.payload;
                return {...state, [prop]: value};
      case SAVE_SUCCESS:
            const {profileSavedMessage} = action.payload;
            return {...state, profileSavedMessage}
        default:
            return state;
    }
}