import React, { useContext, useEffect } from 'react';
import ContextAuth from '../../context/auth/contextAuth';

const Nav = () => {

    const contextAuth = useContext(ContextAuth);
    const { user, authenticatedUser, signOut } = contextAuth;

    useEffect(() => {
        authenticatedUser();
    // eslint-disable-next-line
    }, []);

    return ( 
        <header className="app-header">
            {user ? (
                <p className="nombre-usuario">
                    Hi <span> {user.name} </span>
                </p>                
            ) : null}

            <nav className="nav-principal">
                <button
                    className="btn btn-blank sign-out"
                    onClick={ () => signOut()}
                >Sign out</button>
            </nav>
        </header>
    );
}
 
export default Nav;