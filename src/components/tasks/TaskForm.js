import React, { useContext, useEffect, useState } from 'react';
import ContextProject from '../../context/projects/contextProject';
import ContextTask from '../../context/tasks/contextTask';

const TaskForm = () => {

    
    const contextProjects = useContext(ContextProject);
    const tasksContext = useContext(ContextTask);
    
    const { activeProject } = contextProjects;
    const { selectedTask, taskError, addTask, validateTask, obtainTasks, updateTask, cleanUpTask } = tasksContext;
    
    // Effect to get when there is a task selected
    useEffect(() => {
        if(selectedTask.length !== 0 ){
            saveTask(selectedTask);
            saveState('Edit task');
        }else{
            saveTask({
                name: ''
            });
            saveState('Add task');
        }
    }, [selectedTask]);

    // Form State
    const [ task, saveTask ] = useState({
        name: '',
    });
    // Button task name state
    const [ buttonState, saveState ] = useState('');

    // Extract project name
    const { name } = task;

    // If there is no an active project, return null
    if(!activeProject) return null;

    // Read form values
    const handleChange = e => {
        saveTask({
            ...task,
            [e.target.name]: e.target.value 
        })
    }
    const onSubmit = e => {
        e.preventDefault();

        // Validate
        if( name.trim() === "" ){
            validateTask();
            return;
        }

        // Edit or new task
        if(selectedTask.length === 0){ // New task
            // Add new task
            task.projectID = activeProject[0]._id;
            
            addTask(task);
        }else{ // Edit task (updated in useEffect)
            updateTask(task);
            cleanUpTask();
        }

        // Obtain and filter before restart
        obtainTasks(activeProject[0].id);

        // Restart form
        saveTask({
            name: ''
        });
    }
    return ( 
        <div className="formulario">
            <form action=""
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">

                    <input 
                        type="text" 
                        className="input-text"
                        placeholder="Task name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />

                </div>

            
                <div className="contenedor-input">
                    
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={buttonState}
                    />

                </div>

            </form>

            {taskError ? <p className="mensaje error">Task name is required</p> : null}
        </div>
    );
}
 
export default TaskForm;