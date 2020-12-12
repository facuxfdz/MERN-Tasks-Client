import React, {useContext, useEffect} from 'react';
import Project from './Project';
import ContextProject from '../../context/projects/contextProject';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


const ProjectList = () => {

    // Extract projects from initial state
    const contextProjects = useContext(ContextProject);
    const { projects, getProjects } = contextProjects;

    useEffect(() => {
        getProjects();

        // eslint-disable-next-line 
    }, []);
    
    if(projects.length === 0) return <h4> No projects yet</h4>;

    

    return ( 
        <ul className="listado-proyectos">
            <TransitionGroup>
            {projects.map(project =>(
                <CSSTransition
                    key={project.id}
                    timeout={350}
                    classNames="proyecto"
                >
                    <Project
                        project={project}
                    />
                </CSSTransition>
            ))}
            </TransitionGroup>
        </ul>
    );
}
 
export default ProjectList;