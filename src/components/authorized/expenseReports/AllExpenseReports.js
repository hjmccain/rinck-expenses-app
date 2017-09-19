import React from 'react';
import { Link } from 'react-router-dom';

const filtered = (reports, id) => {
  return reports.filter(r => r.user === id);
}

const eachReport = (reports, username) => {
  return reports.map((report, idx) => {
    return (
      <div key={idx}>
        <Link to={`/${username}/view/expense-report/${report.id}?id=${report.id}`}>
          <div className="list-item">
            <h4>{report.id}: {report.reportEvent}</h4>
          </div>
        </Link>
      </div>
    )
  })
}

const AllExpenseReports = (props) => {

  const { reports, auth } = props;
  const { userID, username } = auth;

  return (
    <div id="all-expense-reports-container" className={props.authClass}>
      <h3 className="header">Expense Reports</h3>
      <button className="border-button">New Report</button>
      <div className="report-list">
        {eachReport(filtered(reports, userID), username)}
      </div>
    </div>
  )
}

export default AllExpenseReports;
