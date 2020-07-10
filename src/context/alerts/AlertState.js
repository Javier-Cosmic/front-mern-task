import React, { useReducer } from 'react'; 
import AlertContext from './AlertContext';
import AlertReducer from './AlertReducer';
import {SHOW_ALERT, HIDE_ALERT} from '../../types';

const AlertState = ({ children }) => {

    const initialState = {
        alert: null
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState);

    // funcion mostrar alerta
    const showAlert = (msg, category) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg,
                category
            }
        });

        // despues de 5 seg se deja de mostrar la alerta
        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            });

        }, 5000);
    }

    const values = {
        alert: state.alert,
        showAlert
    }

    return (
        <AlertContext.Provider value={values}>
            {children}
        </AlertContext.Provider>
    )
}

export default AlertState;