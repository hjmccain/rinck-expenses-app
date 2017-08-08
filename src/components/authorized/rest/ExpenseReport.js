import React from 'react';

const getReceipts = (toFind, toSearch) => {
  return toFind.map(idToFind => {
    return toSearch.filter(receiptObj => {
      return receiptObj.id === idToFind;
    }).reduce((a, b) => a.concat(b));
  })
}

const eachReceipt = (receipts) => {
  return receipts.map((elem, idx) => {
    return (
      <h5 key={idx}>{elem.id}</h5>
    )
  })
}

const ExpenseReport = (props) => {
  const { reports, receipts } = props;
  const urlParams = new URLSearchParams(window.location.search);
  const reportID = urlParams.get('id');
  const report = reports.filter(report => report.id.toString() === reportID.toString());
  const filtered = getReceipts(report[0].receipts, receipts);

  return (
    <div>
      <h4>Expense Report Details</h4>
      <div>
        {eachReceipt(filtered)}
      </div>
    </div>
  )
}

export default ExpenseReport;
