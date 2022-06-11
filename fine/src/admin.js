import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const isAuth = () => {
  if (window !== 'undefined') {
      if (localStorage.getItem('admin')) {
          return JSON.parse(localStorage.getItem('admin'));
      } else {
          return false;
      }
  }
};

const AdminRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={
                props => isAuth() ? (<Component {...props} />) : 
                      window.localStorage.getItem('user') ? 
                              
                      (
                          window.alert('unauthorized admin access !')
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

export default AdminRoute;