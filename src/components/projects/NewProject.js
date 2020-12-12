import React, { Fragment, useContext, useState } from 'react';
import ContextProject from '../../context/projects/contextProject';


const NewProject = () => {

    // Obtain form state
    const contextProjects = useContext(ContextProject);
    const { form, formError, showForm, addProject, showError } = contextProjects;
    
    // States
    const [ project,saveProject ] = useState({
        name: ''
    });

    const { name } = project;

    // Handle the input change
    const onChangeProject = e =>{
        saveProject({
            ...project,
            [e.target.name]: e.target.value
        });
    }

    // Handle the form submit
    const onSubmitProject = e =>{
        e.preventDefault();

        // Validate project
        if (name.trim() === ''){
            showError();
            return;
        }

        // Add to state
        addProject(project);

        // Form restart
        saveProject({
            name: ''
        })
    }
    return ( 
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => showForm()}
            >New project</button>
            { 
            
            form 
                
            ?  (
                <form 
                    action=""
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProject}
                >
                    <input 
                        type="text"
                        className="input-text"
                        placeholder="Project name"
                        name="name"  
                        value={name}
                        onChange={onChangeProject}  
                    />

                    <input 
                        type="submit"
                        className="btn btn-primario btn-block"
                        value="Add project"
                    />
                
                </form> 
            ) : null }
        
        { formError ? <p className="mensaje error">Project name is required</p>: null}
            

        </Fragment>
    );
}
 
export default NewProject;