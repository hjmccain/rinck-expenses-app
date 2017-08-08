import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = (props) => {
  return (
    <div>
      User menu page
      <NavLink to={`view/all-expense-reports`}>View Expense Reports</NavLink>
    </div>
  )
}

export default UserMenu;
