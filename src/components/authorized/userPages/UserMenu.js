import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = (props) => {
  console.log('user menu props:',props);
  return (
    <div>
      Welcome, {props.auth.name.first}!
      <br />
      <NavLink to={`view/all-expense-reports`}>Expense Reports</NavLink>
    </div>
  )
}

export default UserMenu;
