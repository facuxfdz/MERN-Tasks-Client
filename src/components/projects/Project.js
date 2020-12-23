import React, { useContext } from 'react';
import ContextProject from '../../context/projects/contextProject';
import ContextTask from '../../context/tasks/contextTask';



const Project = ({project}) => {

    const contextProjects = useContext(ContextProject);
    const contextTasks = useContext(ContextTask);
    
    const { actualProject } = contextProjects;
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
                onClick={ () => selectProject(project._id) }
            > {project.name} </button>
        </li>
    );
}
 
export default Project;