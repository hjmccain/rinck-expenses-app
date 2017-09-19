import React, { Component } from 'react';

const editableText = (label, content) => {
  return (
    <div>
      <span className="label">{label}</span>
      <span
        className="input"
        contentEditable>{content}</span>
    </div>
  )
}

class UploadOrEditReceipt extends Component {
  // After component mounts, save contents of each input field in state.
  // On submit, (1) compare initial state with current contents; update if necessary.
  // (2) Update 'completed' status.

  render() {
    const { receiptInfo, authClass } = this.props;
    return (
      <div className={authClass} id="receipt-info-modal">
        <form id="add-edit-receipt">
          {editableText('Date:', receiptInfo ? receiptInfo.date : null)}
          {editableText('Place of Purchase::', receiptInfo ? receiptInfo.placeOfPurchase : null)}
          {editableText('Amount:', receiptInfo ? receiptInfo.amount : null)}
          <div className="upload-label">
            Add Receipt
          </div>
          <div className="upload-label">
            View Receipts
          </div>
        </form>
      </div>
    )
  }
}

export default UploadOrEditReceipt;
