import React from 'react';
import { NavLink } from 'react-router-dom';

const user = 'hannah';

const UserMenu = (props) => {
  return (
    <div>
      User menu page
      <br />
      <NavLink to={`add/expense-report`}>Add Expense Report</NavLink>
      <br />
      <NavLink to={`view/all-expense-reports`}>View Expense Reports</NavLink>
    </div>
  )
}

export default UserMenu;
