import {
    SUCCESSFUL_REGISTRATION,
    FAILED_SIGN_UP,
    GET_USER,
    SUCCESSFUL_LOGIN,
    FAILED_LOGIN,
    SIGN_OFF
} from '../../types/index';

const authReducer = (state, action) => {
    switch (action.type) {
        
        case SUCCESSFUL_LOGIN:
        case SUCCESSFUL_REGISTRATION:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                auth: true,
                msg: null,
                loading: false
            }
        case SIGN_OFF:
        case FAILED_LOGIN:
        case FAILED_SIGN_UP:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                user: null,
                auth: null,
                msg: action.payload,
                loading: false
            }
        case GET_USER:
            return {
                ...state,
                auth: true,
                user: action.payload,
                loading: false
            }

        default:
            return state;
    }
}

export default authReducer;