import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import AuthRoute from '../AuthRoute';
import UserMenu from './userPages/UserMenu';
import ExpenseReport from './rest/ExpenseReport';
import AllExpenseReports from './rest/AllExpenseReports';

const UserContainer = (props) => {
  
  const { username } = props.auth;

  return (
    <div>
      <Redirect from={`/${username}`} to={`/${username}/menu`} />
      <Switch>
        <AuthRoute path={`/${username}/menu`} component={UserMenu} />
        <AuthRoute path={`/${username}/view/all-expense-reports`} component={AllExpenseReports} />
        <AuthRoute path={`/${username}/view/expense-report/:id`} component={ExpenseReport} />
      </Switch>
    </div>
  )

}

export default UserContainer;
