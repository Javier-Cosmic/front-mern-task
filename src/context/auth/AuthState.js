import React, {useReducer} from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import clientAxios from '../../config/Axios';
import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from '../../types';

const AuthState = ({children}) => {

    const initialState = {
        token: localStorage.getItem('token'),   // el token lo guardamos en el localstorage
        isAuth: null,
        user: null,
        msg: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // funcion registrar usuarios
    const registerUser = async (data) => {
        try {
            // peticion a la ruta de la api
            const res = await clientAxios.post('/api/user', data);

            // almacenamos la data en el payload
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data

            })
            
        } catch (error) {
        
            const alert = {
                msg: error.response.data.msg
            }   

            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            })  
        }
    }

    // valores 
    const values = {
        token: state.token,
        isAuth: state.isAuth,
        user: state.user,
        msg: state.msg,
        registerUser
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState;