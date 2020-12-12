import React, { useContext } from 'react';
import ContextProject from '../../context/projects/contextProject';
import ContextTask from '../../context/tasks/contextTask';



const Project = ({project}) => {

    // Obtain projects state
    const contextProjects = useContext(ContextProject);
    const { actualProject } = contextProjects;

    // Obtain context func from tasks
    const contextTasks = useContext(ContextTask);
    const { obtainTasks } = contextTasks;

    //Func to add actual project
    const selectProject = id => {
        actualProject(id);
        obtainTasks(id);
    }
    return ( 
        <li>
            <button
                type="button"
                className="btn btn-blank"
                onClick={ () => selectProject(project.id) }
            > {project.name} </button>
        </li>
    );
}
 
export default Project;