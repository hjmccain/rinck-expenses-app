import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = (props) => {
  return (
    <div>
      User menu page
      <br />
      <NavLink to={`view/all-expense-reports`}>View Expense Reports</NavLink>
    </div>
  )
}

export default UserMenu;
