
import {
    USER_DETAILS,
    LOGIN_SUCCESS
} from './../actions/types'
const INITIAL_STATE = {
    email: '',
    password: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case USER_DETAILS:
            const { prop, value } = action.payload;
            return {...state, [prop]: value};
        case LOGIN_SUCCESS:
            return {...state, ...INITIAL_STATE}
        default:
            return state;
    }
}