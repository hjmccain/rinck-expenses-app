import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import UserContainer from './authorized/UserContainer';
import Login from './unauthorized/Login';

const user = "hannah";

const AppContainer = (props) => {
  return (
    <div>
      <Redirect from='/' to={`/${user}`} />
      <Switch>
        <AuthRoute path={`/${user}`} component={UserContainer} />
        <Route path='/unauthorized' component={Login} />
      </Switch>
    </div>
  )
}

export default AppContainer;
