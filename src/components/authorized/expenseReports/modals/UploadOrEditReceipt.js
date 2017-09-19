import React, { Component } from 'react';

class UploadOrEditReceipt extends Component {
  // After component mounts, save contents of each input field in state.
  // On submit, (1) compare initial state with current contents; update if necessary.
  // (2) Update 'completed' status.

  render() {
    const { receiptInfo } = this.props;
    return (
      <div className={props.authClass} id="receipt-info-modal">
        <form>
          <div>
            <span>Date:</span>
            <span contentEditable>{receiptInfo ? receiptInfo.date : null}</span>
          </div>
          <div>
            <span>Place of Purchase:</span>
            <span contentEditable>{receiptInfo ? receiptInfo.placeOfPurchase : null}</span>
          </div>
          <div>
            <span>Amount:</span>
            <span contentEditable>{receiptInfo ? receiptInfo.amount : null}</span>
          </div>
          <div>
            <span>Add Receipt</span>
          </div>
          <div>
            <span>View Receipts</span>
          </div>
        </form>
      </div>
    )
  }
}

export default UploadOrEditReceipt;
