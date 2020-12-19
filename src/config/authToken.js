/*
    This file is created in order to abstract the token sending via headers, 
    because this action is necessary in many parts of the code
     
*/


import axiosClient from './axios';

const authToken = token => {
    if(token){
        axiosClient.defaults.headers.common['x-auth-token'] = token;
    }else{
        delete axiosClient.defaults.headers.common['x-auth-token'];
    }
}

export default authToken;