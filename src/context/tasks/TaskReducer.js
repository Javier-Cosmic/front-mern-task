import {
    TASK_PROJECT,
    NEW_TASK,
    ERROR_TASK,
    DELETE_TASK,
    TASK_STATE,
    TASK_CURRENT,
    UPDATE_TASK
} from '../../types';

export default (state, action) => {
    switch(action.type){

        case TASK_PROJECT:
            return{
                ...state,
                taskProject: state.tasks.filter( task => task.projectId === action.payload),
                currentask: null
            }

        case NEW_TASK:
            return{
                ...state,
                tasks: [...state.tasks, action.payload],
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
                tasks: state.tasks.filter(task => task.id !== action.payload)
            }

        case UPDATE_TASK:
        case TASK_STATE:
            return{
                ...state,
                tasks: state.tasks.map(task => task.id === action.payload.id ? action.payload : task),
                currentask: null
            }

        case TASK_CURRENT:
            return{
                ...state,
                currentask: action.payload
            }
        
        default:
            return state; 
    }
}