import React, { Fragment, useContext } from 'react';
import Task from './Task';
import ContextProject from '../../context/projects/contextProject';
import ContextTask from '../../context/tasks/contextTask';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TaskList = () => {

    // Using contexts
    const contextProjects = useContext(ContextProject);
    const contextTasks = useContext(ContextTask);
    
    // Extracting from contexts
    const { activeProject, eliminateProject } = contextProjects;
    const { actualTasks, eliminateAllTasks } = contextTasks;

    // There is no project selected
    if(!activeProject) return <h2>Select any project</h2>;

    // Extracting actualProjects values
    const [ currentProject ] = activeProject;

    // Exctracting tasks from the actual project
    const projectTasks = actualTasks;

    // Eliminate an entire project
    const onClickEliminate = () => {
        eliminateProject(currentProject.id);
        eliminateAllTasks(currentProject.id);
    }


    return ( 

        <Fragment>

            <h2>Project: {currentProject.name} </h2>

            <ul className="listado-tareas">

                {(projectTasks.length === 0)
                    ? (<li className="tarea"><p>There are no tasks yet</p></li>)   
                    : <TransitionGroup>
                        {projectTasks.map(task =>(
                            <CSSTransition
                                key={task.id}
                                timeout={350}
                                classNames="tarea"
                            >
                                <Task 
                                    projectTask={task}
                                />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                }
            
            </ul>

            <button
                type="button"
                className="btn btn-eliminate"
                onClick={onClickEliminate}
            >Eliminate project &times;</button>
            
        </Fragment>
    
    );
}
 
export default TaskList;