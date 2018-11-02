import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {getAuth} from './global';

import store from './store';

const PrivateRoute = ({ component: Component, ...rest }) =>
    (<Route
      {...rest}
            render={props =>{
                return getAuth() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
                }}
        />
);

export default PrivateRoute;



