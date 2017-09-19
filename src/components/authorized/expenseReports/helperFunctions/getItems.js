import React from 'react';

// Pass in an array of item IDs to find (e.g. receipt array of a report), and
// then search through those items (e.g. all receipts) and return objects that match the IDs.
export const getItems = (toFind, toSearch) => {
  return toFind.map(idToFind => {
    return toSearch.filter(receiptObj => {
      return receiptObj.id === idToFind;
    }).reduce((a, b) => a.concat(b));
  })
}

export const createDataTable = (items, ComponentToRender, cb) => {
  return items.map((item, idx) => <ComponentToRender
    key={item.id}
    data={item}
    cb={cb}
    color={idx%2===0?'yellow-row':'white-row'} />)
}

export const getID = IDToFind => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(IDToFind).toString();
}
