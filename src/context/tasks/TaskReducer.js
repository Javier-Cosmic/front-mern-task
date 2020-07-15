import {
    TASK_PROJECT,
    NEW_TASK,
    ERROR_TASK,
    DELETE_TASK,
    TASK_CURRENT,
    UPDATE_TASK,
    CLEAN_TASK
} from '../../types';

export default (state, action) => {
    switch(action.type){

        case TASK_PROJECT:
            return{
                ...state,
                taskProject: action.payload,
                currentask: null,
                errorTask: false
            }

        case NEW_TASK:
            return{
                ...state,
                taskProject: [action.payload, ...state.taskProject],
                errorTask: false
            }
        
        case ERROR_TASK:
            return{
                ...state,
                errorTask: action.payload
            }

        case DELETE_TASK:
            return{
                ...state,
                taskProject: state.taskProject.filter(task => task._id !== action.payload)
            }

        case UPDATE_TASK:
            return{
                ...state,
                taskProject: state.taskProject.map(task => task._id === action.payload._id ? action.payload : task),
                currentask: null
            }

        case TASK_CURRENT:
            return{
                ...state,
                currentask: action.payload,
                errorTask: false
            }

        case CLEAN_TASK:
            return{
                ...state,
                taskProject: []
            }
        
        default:
            return state; 
    }
}