import React, {useReducer} from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import {
    TASK_PROJECT,
    NEW_TASK,
    ERROR_TASK,
    DELETE_TASK,
    TASK_CURRENT,
    UPDATE_TASK,
    CLEAN_TASK
} from '../../types';
import clientAxios from '../../config/Axios';

const TaskState = ({children}) => {

    const initialState = {
        taskProject: [],
        errorTask: false,
        currentask: null
    }

    // inicializar el state y el dispatch
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // limpiar state cuando se cierre sesion
    const cleanTask = () => {
        dispatch({
            type: CLEAN_TASK
        })
    }
    
    // obtener las tareas de los proyectos por id
    const getTask = async projectId => {

        try {
            // si se envia x params el ID el back debe recibirlo con req.query
            const res = await clientAxios.get('/api/tasks/', { params: { project: projectId}} );
            
            dispatch({
                type: TASK_PROJECT,
                payload: res.data.tasks
            })

        } catch (error) {
            console.log(error)
        }
    }

    // anadir una nueva tarea
    const addTask = async (task) => {
        
        try {
            const res = await clientAxios.post('api/tasks/', task);
            
            dispatch({
                type: NEW_TASK,
                payload: task
            })

        } catch (error) {
            console.log(error);
        }
    }

    // obtener la tarea actual para editarla
    const currentTask = (task) => {
        dispatch({
            type: TASK_CURRENT,
            payload: task
        })
    }

    //validar el nombre de la tarea
    const validateTask = () => {
        dispatch({
            type: ERROR_TASK,
            payload: true
        })
    }

    // eliminar una tarea
    const deleteTask = async (taskId, projectId) => {
        try {
            
            await clientAxios.delete(`/api/tasks/${taskId}`, {params: {project: projectId}});

            dispatch({
                type: DELETE_TASK,
                payload: taskId
            })

        } catch (error) {
            console.log(error);
        }
    }

    //actualizar tarea
    const updateTask = async (task) => {
        
        try {
        
            const res = await clientAxios.put(`/api/tasks/${task._id}`, task);

            dispatch({
                type: UPDATE_TASK,
                payload: res.data.task
            })
        } catch (error) {
            console.log(error)
        }
    }


    // valores del context
    const values = {
        taskProject: state.taskProject,
        errorTask: state.errorTask,
        currentask: state.currentask,
        getTask,
        addTask,
        validateTask,
        deleteTask,
        currentTask,
        updateTask,
        cleanTask
    }

    return (
        <TaskContext.Provider value={values}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskState;