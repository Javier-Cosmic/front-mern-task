import React, { useReducer } from 'react';
import ProjectContext from './ProjectContext';
import ProjectReducer from './ProjectReducer';
import { 
    NEW_PROJECT, 
    GET_PROJECT,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    DELETE_PROJECT,
    PROJECT_ERROR,
    CLEAN_PROJECT
 } from '../../types';
import clientAxios from '../../config/Axios';


const ProjectState = ({children}) => {
    
    const initialState = {
        projects: [], 
        FormNewproject: false,
        msgValidateForm: false,
        currentproject: null,
        msg: null
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

    // limpiar state
    const cleanProject = () => {
        dispatch({
            type: CLEAN_PROJECT
        })
    }
    
    //obtener los proyectos  ---> por parametros le pasamos la constante proyectos igual a un array de objetos
    const getProject = async () => {
        
        try {            
            const res = await clientAxios.get('/api/projects');
            
            dispatch({
                type: GET_PROJECT,
                payload: res.data.projects
            })

        } catch (error) {

            const alert = {
                msg: 'Ha ocurrido un error.'
            }
            
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })

            setTimeout(() => {
                dispatch({
                    type: PROJECT_ERROR,
                    payload: null
                })
            }, 3000)
        }
    }

    // agregar un proyecto nuevo
    const addProject = async (project) => {
        
        try {
            
            const res = await clientAxios.post('/api/projects', project);

            //agregamos el proyecto
            dispatch({
                type: ADD_PROJECT,
                payload: res.data
            })

        } catch (error) {

            const alert = {
                msg: 'Ha ocurrido un error.'
            }
            
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })

            setTimeout(() => {
                dispatch({
                    type: PROJECT_ERROR,
                    payload: null
                })
            }, 3000)
        } 
      
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
    const deleteProject = async (projectId) => {

        try {
            
            await clientAxios.delete(`/api/projects/${projectId}`);
            
            dispatch({
                type: DELETE_PROJECT,
                payload: projectId
            })
                        
            
        } catch (error) {

            const alert = {
                msg: 'Ha ocurrido un error.'
            }
            
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })

            setTimeout(() => {
                dispatch({
                    type: PROJECT_ERROR,
                    payload: null
                })
            }, 3000)
        }
    }   

    // los valores que recibe el context provider
    const values = {
        projects: state.projects,
        newForm: state.FormNewProject,
        msgValidateForm: state.msgValidateForm,
        currentProject: state.currentproject,
        msgError: state.msg,
        viewForm,
        getProject,
        addProject,
        validateForm,
        projectCurrent,
        deleteProject,
        cleanProject
    }

    return (
        <ProjectContext.Provider value={values}>    
            {children}
        </ProjectContext.Provider>
    );
}

export default ProjectState;