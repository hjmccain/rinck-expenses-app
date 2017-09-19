import React, { Component } from 'react';

import { getItems, getID, createDataTable } from './helperFunctions/getItems';
import UploadOrEditReceipt from './modals/UploadOrEditReceipt';
import ReceiptLineItem from './subComponents/ReceiptLineItem';

class ExpenseReport extends Component {
  state = {
    modalIsOpen: false,
    receiptInfo: null
  }

  toggleModal = (receiptInfo) => {
    this.setState({
      modalIsOpen: true,
      receiptInfo
    })
  }

  render() {
    const { reports, receipts, authClass } = this.props;
    const report = reports.filter(r => r.id === +getID('id'));
    const filtered = getItems(report[0].receipts, receipts);

    return (
      <div className={authClass}>
        <h3 className="header">{report[0].reportEvent}</h3>
        <button className="border-button">Edit</button>
        <br />
        <button className="border-button">Submit</button>
        <table id="expense-report-table">
          <tbody>
            <tr>
                <th>Date</th>
                <th>Place of Purchase</th>
                <th>Amount ($)</th>
            </tr>
            {createDataTable(filtered, ReceiptLineItem, this.toggleModal)}
          </tbody>
        </table>
        <br />
        <button
          onClick={() => this.toggleModal(null)}
          className="border-button">Add Receipt</button>
        {this.state.modalIsOpen ?
          <UploadOrEditReceipt report={report[0]} receiptInfo={this.state.receiptInfo} />
        : <div className="display-none"></div>}
      </div>
    )
  }

}

export default ExpenseReport;
