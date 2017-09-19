import React from 'react';

const ReceiptLineItem = (props) => {
  const { date, placeOfPurchase, amount } = props.data;
  return (
    <tr key={props.data.id} className={props.color} onClick={() => props.cb({date, placeOfPurchase, amount})}>
        <td>{props.data.date}</td>
        <td>{props.data.placeOfPurchase}</td>
        <td>{props.data.amount}</td>
    </tr>
  )
}

export default ReceiptLineItem;
