import React, { useReducer } from 'react';
import ContextTask from './contextTask';
import ReducerTask from './reducerTask';
import axiosClient from '../../config/axios';
import {
    PROJECT_TASKS,
    ADD_TASK,
    TASK_VALIDATE,
    ELIMINATE_TASK,
    ACTUAL_TASK,
    EDIT_TASK,
    CLEAN_TASK_BTN,
    ELIMINATE_ALL_TASKS
} from '../../types/index';

const StateTask = props => {

    const initialState = {
        actualTasks: [],
        taskError: false,
        selectedTask: []
    }

    //Create dispatch and state
    const [ state, dispatch ] = useReducer(ReducerTask,initialState);


    
    //Obtain specific project tasks
    const obtainTasks = async projectID => {
        try {
            const res = await axiosClient.get('/api/tasks', {params: {projectID}});
            
            dispatch({
                type: PROJECT_TASKS,
                payload: res.data.tasks
            });

        } catch (error) {
            console.log(error.response);
        }
    }

    //Add task to any project
    const addTask = async task => {

        try {
            
            const res = await axiosClient.post('/api/tasks', task);

            dispatch({
                type: ADD_TASK,
                payload: res.data.task
            });

        } catch (error) {
            console.log(error.response);
            
        }
    }

    // Validate and show error
    const validateTask = () => {
        dispatch({
            type: TASK_VALIDATE
        });
    }

    // Eliminate a task
    const eliminateTask = async (taskID, projectID) => {

        try {
            
            await axiosClient.delete(`/api/tasks/${taskID}`, {params: {projectID}});

            dispatch({
                type: ELIMINATE_TASK,
                payload: taskID
            });

        } catch (error) {
            console.log(error.response);
        }
    }

    // Edit task
    const updateTask = async task => {
    
        try {
            const res = await axiosClient.put(`/api/tasks/${task._id}`, task);
            
            dispatch({
                type: EDIT_TASK,
                payload: res.data.task
            });
        } catch (error) {
            console.log(error);
        }

    }


    // Extract task in order to edit
    const saveActualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    }


    // Clean task form
    const cleanUpTask = () => {
        dispatch({
            type: CLEAN_TASK_BTN
        })
    } 

    const eliminateAllTasks = async projectID => {

        try {
            
            await axiosClient.delete('/api/tasks', {params: {projectID}});
           
            dispatch({
                type: ELIMINATE_ALL_TASKS
            });

        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <ContextTask.Provider
            value={{
                actualTasks: state.actualTasks,
                taskError: state.taskError,
                selectedTask: state.selectedTask,
                obtainTasks,
                addTask,
                validateTask,
                eliminateTask,
                saveActualTask,
                updateTask,
                cleanUpTask,
                eliminateAllTasks
            }}
        >
            {props.children}
        </ContextTask.Provider>
    );
}

export default StateTask;