import React, { useReducer } from 'react';
import reducerAlert from './reducerAlert';
import ContextAlert from './contextAlert';
import {
    SHOW_ALERT,
    HIDE_ALERT
} from '../../types/index';

const StateAlert = props => {

    const initialState = {
        alert: null
    }

    const [ state, dispatch ] = useReducer(reducerAlert,initialState);

    // Functions 
    const showAlert = (msg, categ) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg,
                categ
            }
        });

        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            });
        },5000)
    }
    return(
        <ContextAlert.Provider
            value={{
                alert: state.alert,
                showAlert
            }}
        >
            {props.children}

        </ContextAlert.Provider>
    );
}

export default StateAlert;