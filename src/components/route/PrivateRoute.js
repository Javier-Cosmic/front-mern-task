import React, {useContext, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';

const PrivateRoute = ({ component: Component, ...props}) => {
    
    const authContext = useContext(AuthContext);
    const { userAuth, isAuth, loading } = authContext;

    useEffect(() => {
        userAuth()
    }, [])

    return (
        <Route {...props}
            render={
                props => !isAuth && !loading
                ? ( <Redirect to='/'/> )
                : ( <Component {...props} />)
            }
        />
    )
}

export default PrivateRoute;