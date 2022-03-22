import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../Context/Context';

const PrivateRoute = ({ children, isToBeNeglected, ...rest }) => {
    const { isLoggedIn } = useContext(UserContext);

    // if (isLoading) {
    //     const style = { textAlign: 'center', padding: '200px 0', fontSize: '40px' };
    //     return <div style={style}>Loading...</div>;
    // }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                isLoggedIn ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: '/login',
                            state: { from: location }
                        }}
                    />
                )
            }
        />


    );
};

export default PrivateRoute;