import React, { useContext } from 'react';
import ContextTask from '../../context/tasks/contextTask';
import ContextProject from '../../context/projects/contextProject';

const Task = ({projectTask}) => {

    const tasksContext = useContext(ContextTask);   
    const projectsContext = useContext(ContextProject);

    const { eliminateTask, obtainTasks, updateTaskState, saveActualTask } = tasksContext;
    const { activeProject } = projectsContext;


    // Function launched when eliminate is pressed
    const eliminate = id => {
        eliminateTask(id);
        obtainTasks(activeProject[0].id);
    }

    // Function to Update task state
    const updateState = task => {
        
        if(task.state){
            task.state = false;
        }else{
            task.state = true;
        }
        updateTaskState(task);
        
    } 

    // Function to edit task
    const selectTask = task => {
        saveActualTask(task);
    }

    return ( 
        <li className="tarea sombra">
            <p> {projectTask.name} </p>

            <div className="estado">
                {projectTask.state
                
                ? (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => updateState(projectTask)}
                        >Complete</button>
                    )

                : (
                    <button
                        type="button"
                        className="incompleto"
                        onClick={() => updateState(projectTask)}
                    >Incomplete</button>
                    )
                
                }
            </div>
            
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => selectTask(projectTask)}
                >Edit</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => eliminate(projectTask.id)}
                >Eliminate</button>
            </div>

        </li>
    );
}
 
export default Task;