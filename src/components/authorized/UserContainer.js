import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import AuthRoute from '../AuthRoute';
import UserMenu from './userPages/UserMenu';
import ExpenseReport from './rest/ExpenseReport';
import AllExpenseReports from './rest/AllExpenseReports';

const user = "hannah";

const UserContainer = (props) => {
  return (
    <div>
      <Redirect to={`/${user}/menu`} />
      <Switch>
        <AuthRoute path={`/${user}/menu`} component={UserMenu} />
        <AuthRoute path={`/${user}/add/expense-report`} component={ExpenseReport} />
        <AuthRoute path={`/${user}/add/all-expense-reports`} component={AllExpenseReports} />
        <AuthRoute path={`/${user}/view/all-expense-reports`} component={AllExpenseReports} />
        <AuthRoute path={`/${user}/view/expense-report/:id`} component={ExpenseReport} />
        <AuthRoute path={`/${user}/edit/expense-report/:id`} component={ExpenseReport} />
      </Switch>
    </div>
  )
}

export default UserContainer;
