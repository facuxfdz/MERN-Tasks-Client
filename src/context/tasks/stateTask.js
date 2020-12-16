import React, { useReducer } from 'react';
import ContextTask from './contextTask';
import ReducerTask from './reducerTask';
import {
    PROJECT_TASKS,
    ADD_TASK,
    TASK_VALIDATE,
    ELIMINATE_TASK,
    TASK_STATE,
    ACTUAL_TASK,
    EDIT_TASK,
    CLEAN_TASK_BTN,
    ELIMINATE_ALL_TASKS
} from '../../types/index';

const StateTask = props => {

    const initialState = {
        tasks: [],
        actualTasks: [],
        taskError: false,
        selectedTask: []
    }

    //Create dispatch and state
    const [ state, dispatch ] = useReducer(ReducerTask,initialState);


    
    //Obtain specific project tasks
    const obtainTasks = projectID => {
        dispatch({
            type: PROJECT_TASKS,
            payload: projectID
        });
    }

    //Add task to any project
    const addTask = task => {
        dispatch({
            type: ADD_TASK,
            payload: task
        });
    }

    // Validate and show error
    const validateTask = () => {
        dispatch({
            type: TASK_VALIDATE
        });
    }

    // Eliminate a task
    const eliminateTask = taskID => {
        dispatch({
            type: ELIMINATE_TASK,
            payload: taskID
        });
    }

    // Update task state
    const updateTaskState = task => {
        dispatch({
            type: TASK_STATE,
            payload: task
        });
    }

    // Extract task in order to edit
    const saveActualTask = task => {
        dispatch({
            type: ACTUAL_TASK,
            payload: task
        })
    }

    // Edit task
    const updateTask = task => {
        dispatch({
            type: EDIT_TASK,
            payload: task
        })
    }

    // Clean task form
    const cleanUpTask = () => {
        dispatch({
            type: CLEAN_TASK_BTN
        })
    } 

    const eliminateAllTasks = projectID => {
        dispatch({
            type: ELIMINATE_ALL_TASKS,
            payload: projectID
        });
    }
    return (
        <ContextTask.Provider
            value={{
                tasks: state.tasks,
                actualTasks: state.actualTasks,
                taskError: state.taskError,
                selectedTask: state.selectedTask,
                obtainTasks,
                addTask,
                validateTask,
                eliminateTask,
                updateTaskState,
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