import React, {useContext, useEffect} from 'react';
import Project from './Project';
import ContextProject from '../../context/projects/contextProject';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContextAlert from '../../context/alerts/contextAlert';

const ProjectList = () => {

    // Extract projects from initial state
    const contextProjects = useContext(ContextProject);
    const contextAlert = useContext(ContextAlert);

    const { msg, projects, getProjects } = contextProjects;
    const { alert, showAlert } = contextAlert;

    useEffect(() => {

        if(msg){ //if there is some error
            showAlert(msg.msg,msg.categ);
        }

        getProjects();

        // eslint-disable-next-line 
    }, [msg]);
    
    if(projects.length === 0 ) return <h4> No projects yet</h4>;

    

    return ( 
        <ul className="listado-proyectos">
            {alert ? (<div className={`alerta ${alert.categ}`}> {alert.msg} </div>): null}
            <TransitionGroup>
            {projects.map(project =>(
                <CSSTransition
                    key={project._id}
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