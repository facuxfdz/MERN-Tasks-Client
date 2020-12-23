import React, { useContext, useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import ContextAuth from '../../context/auth/contextAuth';

const PrivateRoute = ({ component: Component, ...props }) => {
    
    const contextAuth = useContext(ContextAuth);
    const { auth, loading, authenticatedUser } = contextAuth; 

    useEffect(() => {
        authenticatedUser();
        // eslint-disable-next-line
    }, []);
    
    return ( 
        <Route 
            {...props} 
            render={ props => !auth && !loading ? (
                <Redirect to='/' /> 
            ) : (
                <Component {...props} />
            )}  
        />
    );
}
 
export default PrivateRoute;