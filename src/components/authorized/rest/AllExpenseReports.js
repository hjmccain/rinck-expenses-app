import React from 'react';
// import { Link } from 'react-router-dom';

const filtered = (reports, id) => {
  return reports.filter(r => r.user === id);
}

const eachReport = (reports) => {
  return reports.map((elem, idx) => {
    return (
      <div key={idx}>
        <h4>{elem.id}</h4>
      </div>
    )
  })
}

const AllExpenseReports = (props) => {
  console.log(props);

  const { reports, auth } = props;
  const { userID } = auth;

  return (
    <div>
      <h3>Expense reports</h3>
      <div>
        {eachReport(filtered(reports, userID))}
      </div>
    </div>
  )
}

export default AllExpenseReports;
