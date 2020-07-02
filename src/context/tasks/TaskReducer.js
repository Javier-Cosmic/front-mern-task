import {
    TASK_PROJECT,
    NEW_TASK,
    ERROR_TASK,
    DELETE_TASK
} from '../../types';

export default (state, action) => {
    switch(action.type){

        case TASK_PROJECT:
            return{
                ...state,
                taskProject: state.tasks.filter( task => task.projectId === action.payload)
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

        default:
            return state; 
    }
}