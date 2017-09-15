import React from 'react';
import { Redirect, Switch } from 'react-router-dom';

import AuthRoute from '../AuthRoute';
import UserMenu from './userPages/UserMenu';
import ExpenseReport from './expenseReports/ExpenseReport';
import AllExpenseReports from './expenseReports/AllExpenseReports';

const UserContainer = (props) => {

  const { username } = props.auth;

  return (
    <div>
      <Redirect from={`/${username}`} to={`/${username}/menu`} />
      <Switch>
        <AuthRoute path={`/${username}/menu`} authComponent={UserMenu} />
        <AuthRoute path={`/${username}/view/all-expense-reports`} authComponent={AllExpenseReports} />
        <AuthRoute path={`/${username}/view/expense-report/:id`} authComponent={ExpenseReport} />
      </Switch>
    </div>
  )

}

export default UserContainer;
