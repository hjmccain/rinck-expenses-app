import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import UserMenu from './UserMenu';
import Login from './Login';

const user = "hannah"

const AppContainer = () => {
  return (
    <div>
      <Redirect from='/' to={`/${user}`} />
      <AuthRoute path={`/${user}`} component={UserMenu} />
    </div>
  )
}

export default AppContainer;
