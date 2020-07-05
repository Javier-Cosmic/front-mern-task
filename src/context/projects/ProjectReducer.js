import {
    NEW_PROJECT, 
    GET_PROJECT,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT
} from '../../types';

export default (state, action) => {
    switch(action.type){

        case NEW_PROJECT:
            return {
                ...state,
                FormNewProject: !state.FormNewProject,
                msgValidateForm: false
            }

        case GET_PROJECT:
            return {
                ...state,
                projects: action.payload,
            }
        
        case ADD_PROJECT:
            return {
                ...state,
                projects: [...state.projects, action.payload],
                FormNewProject: false,
                msgValidateForm: false
            }

        case VALIDATE_FORM:
            return {
                ...state,
                msgValidateForm: true
            }

        case CURRENT_PROJECT:
            return {
                ...state,
                currentproject: state.projects.filter( project => project.id === action.payload),
                msgValidateForm: false,
                // FormNewProject: false
            }
 
        case DELETE_PROJECT:
            return {
                ...state,
                projects: state.projects.filter( project => project.id !== action.payload),
                currentproject: null
            }
        
        default:
            return state;
    }
}