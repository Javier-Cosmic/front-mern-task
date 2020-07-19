import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT,
    LOADING_SPINNER
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        
        case LOADING_SPINNER:
            return{
                loadingSpinner: true
            }

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                auth: true,
                msg: null,
                loading: false,
                loadingSpinner: false
            }

        case GET_USER:
            return{
                ...state,
                user: action.payload,
                auth: true,
                loading: false  
            }

        case LOGOUT:
        case LOGIN_ERROR:
        case REGISTER_ERROR:
            localStorage.removeItem('token');
            return{
                ...state,
                token: null,
                user: null,
                auth: null,
                msg: action.payload,
                loading: false,
                loadingSpinner: false
            }
    
        default:
            return state;
    }
}