import React, {useReducer} from 'react';
import ContextAuth from './contextAuth';
import ReducerAuth from './reducerAuth';
import axiosClient from '../../config/axios';
import authToken from '../../config/authToken';
import {
    SUCCESSFUL_REGISTRATION,
    FAILED_SIGN_UP,
    GET_USER,
    SUCCESSFUL_LOGIN,
    FAILED_LOGIN,
    SIGN_OFF
} from '../../types/index';

const StateAuth = props => {

    const initialState = {
        token: localStorage.getItem('token'),
        auth: null,
        user: null,
        msg: null
    }

    const [state,dispatch] = useReducer(ReducerAuth,initialState);

    const userSignUp = async info => {
        try {

            const res = await axiosClient.post('/api/users', info); // POST petition that sign the JWT and logs the user, the data response is the token
            
            dispatch({
                type: SUCCESSFUL_REGISTRATION,
                payload: res.data
            });

            // When user press sign up, the event is launched and, if POST petition is successfull,
            // we need to obtain the authenticated user with the JWT via one GET petition
            authenticatedUser();

        } catch (error) {
            const alert = {
                msg: error.response.data.msg,
                categ: 'alerta-error'
            }

            dispatch({
                type: FAILED_SIGN_UP,
                payload: alert
            });
        }
    }

    const authenticatedUser = async () => {
        const token = localStorage.getItem('token');
       
        authToken(token); // Function that evaluates if send token via headers or delete the existing token
       

        try {
            const res = await axiosClient.get('/api/auth'); // GET petition which response is a json with the 
           
            dispatch({
                type: GET_USER,
                payload: res.data.user
            });
        } catch (error) {
            console.log(error.response);
            dispatch({
                type: FAILED_LOGIN
            });
        }
    }

    return (
        <ContextAuth.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                msg: state.msg,
                userSignUp
            }}
        >
            {props.children}
        </ContextAuth.Provider>
    );
}

export default StateAuth;