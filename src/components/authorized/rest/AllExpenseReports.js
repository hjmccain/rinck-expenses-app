import React from 'react';
import { Link } from 'react-router-dom';

const filtered = (reports, id) => {
  return reports.filter(r => r.user === id);
}

const eachReport = (reports, username) => {
  return reports.map((elem, idx) => {
    return (
      <div key={idx}>
        <h4>{elem.id}</h4>
        <Link to={`/${username}/view/expense-report/${elem.id}?id=${elem.id}`}>
          View / Edit
        </Link>
      </div>
    )
  })
}

const AllExpenseReports = (props) => {

  const { reports, auth } = props;
  const { userID, username } = auth;

  return (
    <div>
      <h3>Expense reports</h3>
      <div>
        {eachReport(filtered(reports, userID), username)}
      </div>
    </div>
  )
}

export default AllExpenseReports;
