import React, { useReducer } from 'react';
import ContextProject from './contextProject';
import ReduceProject from './reducerProject';
import axiosClient from '../../config/axios';
import { 
    PROJECT_FORM, 
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    ACTUAL_PROJECT,
    ELIMINATE_PROJECT,
    PROJECT_ERROR
} from '../../types';


const StateProject = props => {

    

    const initialState = {
        projects: [],
        form: false,
        formError: false,
        activeProject: null,
        msg: null
    };

    // Dispatch to execute actions
    const [ state, dispatch ] = useReducer(ReduceProject, initialState);

    // CRUD functions
    const showForm = () => {
        dispatch({
            type: PROJECT_FORM
        });
    }

    

    // Obtain projects
    const getProjects = async () => {
        try {
            const res = await axiosClient.get('/api/projects');
             
            dispatch({
                type: GET_PROJECTS,
                payload: res.data.projects
            });

        } catch (error) {
            
            
            const alert = {
                msg: error.response.data.msg,
                categ: 'alerta-error'
            };

            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            });
        }
    }

    // Add new project
    const addProject = async project => {
        
        try {
          
            const res = await axiosClient.post('/api/projects', project);
            

            // Update project state
            dispatch({
                type: ADD_PROJECT,
                payload: res.data
            });

        } catch (error) {
            
            let alert;
            if(error.response.data.errors){ // If the error is in the fields validation
                
                alert = { // Create the alert to be showed in the view
                    msg: error.response.data.errors[0].msg,
                    categ: 'alerta-error'
                }
            }else{ // If the error is in the query validation
                alert = { // Create the alert to be showed in the view
                    msg: error.response.data.msg,
                    categ: 'alerta-error'
                }
            }

            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            });
        }
  
    }

    // Validate Form
    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    // Select user project
    const actualProject = projectID => {
        dispatch({
            type: ACTUAL_PROJECT,
            payload: projectID
        })
    }

    // Eliminate one project
    const eliminateProject = async projectID  => {
        try {
            await axiosClient.delete(`/api/projects/${projectID}`); 
            
            dispatch({
                type: ELIMINATE_PROJECT,
                payload: projectID
            });
        
        } catch (error) {
            
            
            const alert = {
                msg: error.response.data.msg,
                categ: 'alerta-error'
            };

            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            });
        }


    }
    return (
        <ContextProject.Provider
            value={{
                projects: state.projects,
                form: state.form,
                formError: state.formError,
                activeProject: state.activeProject,
                msg: state.msg,
                showForm,
                getProjects,
                addProject,
                showError,
                actualProject,
                eliminateProject
            }}
        >
            {props.children}
        </ContextProject.Provider>
    );
}

export default StateProject;