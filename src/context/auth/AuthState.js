import React, {useReducer} from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import clientAxios from '../../config/Axios';
import tokenAuth from '../../config/token';
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
        token: localStorage.getItem('token'),   // el token lo obtenemos del localstorage
        auth: null,
        user: null,
        msg: null,
        loading: true
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

            //obtener el usuario autenticado
            userAuth();
            
        } catch (error) {
        
            // si hay un error de servidor se almacena en msg
            const alert = {
                msg: error.response.data.msg
            }   

            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            })  

            // limpiar el state del msg error
            setTimeout(() => {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: null
                })
            }, 3000)
        }
    }

    // retorna un usuario ya autenticado
    const userAuth = async () => {

        // accedemos al token guardado en el localstorage
        const token = localStorage.getItem('token');

        if (token) {
            // le pasamos el token a la funcion que guarda el token en el header
            tokenAuth(token);
        }

        try {
            const res = await clientAxios.get('/api/auth');
            
            // le pasamos la data de la api
            dispatch({
                type: GET_USER,
                payload: res.data.user
            })
            
        } catch (error) {
            
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    //login
    const login = async (data) => {
        try {

            const res = await clientAxios.post('/api/auth', data);
            
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            })

            //obtener el usuario autenticado
            userAuth();
            
        } catch (error) {
            
            const alert = {
                msg: error.response.data.msg
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            })

            // limpiar el state del msg error
            setTimeout(() => {
                dispatch({
                    type: LOGIN_ERROR,
                    payload: null
                })
            }, 3000)
        }
    }

    // cerrar sesion
    const logout = () => {
        dispatch({
            type: LOGOUT
        })
    }

    // valores 
    const values = {
        token: state.token,
        isAuth: state.auth,
        user: state.user,
        msgAuth: state.msg,
        loading: state.loading,
        registerUser,
        login,
        userAuth,
        logout
    }

    return(
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthState;