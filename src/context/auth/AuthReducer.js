import {
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    GET_USER,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGOUT
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            return{
                ...state,
                auth: true,
                msg: null,
            }

        case GET_USER:
            return{
                ...state,
                user: action.payload,
                auth: true,  
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
            }
    
        default:
            return state;
    }
}