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
        
        case SUCCESSFUL_REGISTRATION:
            localStorage.setItem('token', action.payload.token);
            return {
                ...state,
                auth: true,
                msg: null
            }
        case FAILED_LOGIN:
        case FAILED_SIGN_UP:
            localStorage.removeItem('token');
            return {
                ...state,
                token: null,
                msg: action.payload
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
    
        default:
            return state;
    }
}

export default authReducer;