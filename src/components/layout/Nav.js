import React from 'react';

const Nav = () => {


    return ( 
        <header className="app-header">
            <p className="nombre-usuario">
                Hi <span>Facundo!</span>
            </p>

            <nav className="nav-principal">
                <a href="#!">Sign out</a>
            </nav>
        </header>
    );
}
 
export default Nav;