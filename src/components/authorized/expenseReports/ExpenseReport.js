import React from 'react';

import { getItems, getID, listElements } from './helperFunctions/getItems';
import UploadOrEditReceipt from './modals/UploadOrEditReceipt';
import ReceiptLineItem from './subComponents/ReceiptLineItem';

const ExpenseReport = (props) => {
  const { reports, receipts } = props;
  const report = reports.filter(r => r.id === +getID('id'));
  const filtered = getItems(report[0].receipts, receipts);

  return (
    <div>
      <h4>Expense Report Details</h4>
      <button>Edit</button>
      <button>Submit</button>
      <div>
        {listElements(filtered, ReceiptLineItem)}
      </div>
      <UploadOrEditReceipt visible={true} />
    </div>
  )
}

export default ExpenseReport;
