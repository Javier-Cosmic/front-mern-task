import React, {useReducer} from 'react';
import TaskContext from './TaskContext';
import TaskReducer from './TaskReducer';
import { v4 as uuidv4 } from 'uuid';
import {
    TASK_PROJECT,
    NEW_TASK,
    ERROR_TASK,
    DELETE_TASK,
    TASK_STATE,
    TASK_CURRENT,
    UPDATE_TASK
} from '../../types';

const TaskState = ({children}) => {

    const initialState = {
        tasks: [
            { id: 1, name: "Obtener los datos", estado: true, projectId: 1 },
            { id: 2, name: "Verificar los datos en la bd", estado: false, projectId: 1 },
            { id: 3, name: "Configurar token", estado: true, projectId: 2 },
            { id: 4, name: "Guardar sesion en localstorage", estado: false, projectId: 3 },
        ],
        taskProject: null,
        errorTask: false,
        currentask: null

    }

    // inicializar el state y el dispatch
    const [state, dispatch] = useReducer(TaskReducer, initialState);

    // obtener las tareas de los proyectos por id
    const getTask = projectId => {
        dispatch({
            type: TASK_PROJECT,
            payload: projectId
        })
    }

    // anadir una nueva tarea
    const addTask = (task) => {
        task.id = uuidv4();

        dispatch({
            type: NEW_TASK,
            payload: task
        })
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
    const deleteTask = (taskId) => {
        dispatch({
            type: DELETE_TASK,
            payload: taskId
        })
    }

    // cambiar estado de la tarea
    const changeState = (task) => {
        dispatch({
            type: TASK_STATE,
            payload: task
        })
    }

    //actualizar tarea
    const updateTask = (task) => {
        dispatch({
            type: UPDATE_TASK,
            payload: task
        })
    }


    // valores del context
    const values = {
        tasks: state.tasks,
        taskProject: state.taskProject,
        errorTask: state.errorTask,
        currentask: state.currentask,
        getTask,
        addTask,
        validateTask,
        deleteTask,
        changeState,
        currentTask,
        updateTask
    }

    return (
        <TaskContext.Provider value={values}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskState;