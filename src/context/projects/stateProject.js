import React, { useReducer } from 'react';
import ContextProject from './contextProject';
import ReduceProject from './reducerProject';
import { v4 as uuidv4 } from 'uuid';
import { 
    PROJECT_FORM, 
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    ACTUAL_PROJECT,
    ELIMINATE_PROJECT
} from '../../types';


const StateProject = props => {

    const projects = [];

    const initialState = {
        projects: [],
        form: false,
        formError: false,
        activeProject: null
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
    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    // Add new project
    const addProject = project => {
        project.id = uuidv4();

        // Update project state
        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
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
    const eliminateProject = projectID  => {
        dispatch({
            type: ELIMINATE_PROJECT,
            payload: projectID
        });

    }
    return (
        <ContextProject.Provider
            value={{
                projects: state.projects,
                form: state.form,
                formError: state.formError,
                activeProject: state.activeProject,
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