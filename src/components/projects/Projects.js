import React, { useContext, useEffect } from 'react';
import Sidebar from '../layout/Sidebar';
import Nav from '../layout/Nav';
import TaskForm from '../tasks/TaskForm';
import TaskList from '../tasks/TaskList';
import ContextAuth from '../../context/auth/contextAuth';

const Projects = () => {

    const contextAuth = useContext(ContextAuth);
    const { auth, authenticatedUser } = contextAuth;
    
    useEffect(() => {
        authenticatedUser();
    }, []);

    if(!auth) return null;
    
    return ( 
        <div className="contenedor-app">
            
            <Sidebar />

            <div className="seccion-principal">
                
                <Nav />
                
                <main>

                    <TaskForm />

                    <div className="contenedor-tareas">
                        <TaskList />
                    </div>  

                </main>
            </div>
        </div>
    );
}
 
export default Projects;