import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ContextAlert from '../../context/alerts/contextAlert';

const SignUp = () => {

    // Extract values from context
    const contextAlert = useContext(ContextAlert);
    const { alert, showAlert } = contextAlert;

    // State for the sign in
    const [ user, saveUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm: ''
    });


    // Exctract from user
    const { name, email, password, confirm } = user;

    // Change handle
    const onChange = (e) =>{
        saveUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // When the user wants to sign in
    const onSubmit = e => {
        e.preventDefault();

        // Validate
        if(
            name.trim() === "" ||
            email.trim() === "" ||
            password.trim() === "" ||
            confirm.trim() === ""
        ){
            showAlert('All fields are required', 'alerta-error');
            return;
        }

        // Password minimun length
        if(password.length < 6){
            showAlert('Password must be at least 8 characters in length', 'alerta-error');
            return;
        }

        // Password match
        if(password !== confirm){
            showAlert('Passwords do not match', 'alerta-error');
        }
        // Passing values to action
    }

    return ( 
    
        <div className="form-usuario">
            {alert ? ( <div className={`alerta ${alert.categ}`}>{alert.msg}</div>): null}
            <div className="contenedor-form sombra-dark">
                <h1>Sign Up</h1>

                <form
                    onSubmit={onSubmit}
                >

                    <div className="campo-form">
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={name}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@gmail.com"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Your password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirm">Confirm</label>
                        <input 
                            type="password"
                            id="confirm"
                            name="confirm"
                            placeholder="Confirm your password"
                            value={confirm}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Sign Up"
                        />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Sign In
                </Link>
            </div>
        </div>
    );
}
 
export default SignUp;