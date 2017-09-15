import React from 'react';

const ReceiptLineItem = (props) => {
  return (
    <div key={props.data.id}>
      <p>
        <span>{props.data.date}</span>
        <span>{props.data.placeOfPurchase}</span>
        <span>${props.data.amount}</span>
      </p>
    </div>
  )
}

export default ReceiptLineItem;
