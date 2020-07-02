import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import { v4 as uuidv4 } from 'uuid';
import { 
    NEW_PROJECT, 
    GET_PROJECT,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT
 } from '../../types';


const ProjectState = ({children}) => {

    const proyectos = [
        {id: 1, name: 'Login'},
        {id: 2, name: 'Ecommerce'},
        {id: 3, name: 'Diseño'},
    ]
    
    const initialState = {
        projects: [], 
        FormNewproject: false,
        msgValidateForm: false,
        currentproject: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    
    //Funciones para el crud

    // mostrar el formulario para crear uno nuevo
    const viewForm = () => {
        dispatch({
            type: NEW_PROJECT
        })
    }

    //obtener los proyectos  ---> por parametros le pasamos la constante proyectos igual a un array de objetos
    const getProject = () => {
        dispatch({
            type: GET_PROJECT,
            payload: proyectos,
        })
    }

    // agregar un proyecto nuevo
    const addProject = (proyectos) => {
        // agregamos el id
        proyectos.id = uuidv4();
        
        //agregamos el proyecto
        dispatch({
            type: ADD_PROJECT,
            payload: proyectos
        })
      
    }

    // validar que el formulario no este vacio
    const validateForm = () => {
        dispatch({
            type: VALIDATE_FORM 
        })
    }

    // seleccionar proyecto actual
    const projectCurrent = (projectId) => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: projectId
        })
    }

    // borrar proyecto
    const deleteProject = (projectId) => {
        dispatch({
            type: DELETE_PROJECT,
            payload: projectId
        })
    }   

    // los valores que recibe el context provider
    const values = {
        projects: state.projects,
        newForm: state.FormNewProject,
        msgValidateForm: state.msgValidateForm,
        currentProject: state.currentproject,
        viewForm,
        getProject,
        addProject,
        validateForm,
        projectCurrent,
        deleteProject
    }

    return (
        <ProjectContext.Provider value={values}>    
            {children}
        </ProjectContext.Provider>
    );
}

export default ProjectState;