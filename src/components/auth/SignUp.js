import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {

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

        // Password minimun length

        // Password match

        // Passing values to action
    }

    return ( 
    
        <div className="form-usuario">
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