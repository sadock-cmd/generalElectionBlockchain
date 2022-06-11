import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const isAuth = () => {
  if (window !== 'undefined') {
      if (localStorage.getItem('user')) {
          return JSON.parse(localStorage.getItem('user'));
      } else {
          return false;
      }
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                props => isAuth() ? (<Component {...props} />) : 
                        window.localStorage.getItem('admin') ? 
                        
                        (
                            window.alert('unauthorized user access !')
                        )
                        (
                          window.history.back()
                        )
                        :
                        (
                            <Redirect
                                to={{
                                    pathname: '/',
                                    state: { from: props.location }
                                }}
                            />
                        )
            }
        />
    );
}

export default PrivateRoute;