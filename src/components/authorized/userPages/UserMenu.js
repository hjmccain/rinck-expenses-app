import React from 'react';
import { NavLink } from 'react-router-dom';

const UserMenu = (props) => {
  return (
    <div id="user-menu-container" className={props.authClass}>
      <h3 className="header">Welcome, {props.auth.name.first}!</h3>
      <NavLink
        to={`view/all-expense-reports`}>
        <div className="user-menu-item">
          <div className="background"></div>
          <p className="text">Expense Reports</p>
        </div>
      </NavLink>
      <div className="user-menu-item">
        <div className="background"></div>
        <p className="text">Your Profile</p>
      </div>
    </div>
  )
}

export default UserMenu;
