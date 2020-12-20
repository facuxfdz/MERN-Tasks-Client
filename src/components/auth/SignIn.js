import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ContextAlert from '../../context/alerts/contextAlert';
import ContextAuth from '../../context/auth/contextAuth';

const SignIn = (props) => {

    const authContext = useContext(ContextAuth);
    const alertContext = useContext(ContextAlert);

    const { alert, showAlert } = alertContext;
    const { msg, auth, userLogIn } = authContext;

    useEffect(() => {

        if(auth){
            props.history.push('/projects');
        }

        if(msg){
            showAlert(msg.msg,msg.categ);
        }

    }, [msg, auth]);

    // State for the sign in
    const [ user, saveUser] = useState({
        email: '',
        password: ''
    });


    // Exctract from user
    const { email, password } = user;

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

        
       userLogIn({ // This function validates the fields and update the msg varible
           email,
           password
       });
       
        // Passing values to action
    }

    return ( 
    
        <div className="form-usuario">
            {alert ? ( <div className={`alerta ${alert.categ}`}>{alert.msg}</div>): null}
            
            <div className="contenedor-form sombra-dark">
                <h1>Sign In</h1>

                <form
                    onSubmit={onSubmit}
                >
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
                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Sign In"
                        />
                    </div>
                </form>

                <Link to={'/signup'} className="enlace-cuenta">
                    Sign up for free
                </Link>
            </div>
        </div>
    );
}
 
export default SignIn;