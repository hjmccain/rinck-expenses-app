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
      <Switch>
        <AuthRoute path={`/${user}`} component={UserMenu} />
        <Route path='/unauthorized' component={Login} />
      </Switch>
    </div>
  )
}

export default AppContainer;
