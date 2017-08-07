import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const isLoggedIn = true;

const AuthRoute = ({ component: Component }) => (
  <Route render={props => (
    isLoggedIn ? <Component /> : <Redirect to='/unauthorized' />
  )} />
)

export default AuthRoute;
