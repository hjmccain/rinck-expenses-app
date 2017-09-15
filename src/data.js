export const authenticated = {
  loggedIn: true,
  userID: 2,
  username: 'natep',
  name: { first: 'Nate', last: 'Perkins' }
}

export const users = [
  {
    user: 'hannahm',
    name: { first: 'Hannah', last: 'McCain' },
    reports: [ 1000 ],
    receipts: [ 100, 101 ],
    id: 1
  },
  {
    user: 'natep',
    name: { first: 'Nate', last: 'Perkins' },
    reports: [ 1001, 1002 ],
    receipts: [ 102, 103, 104 ],
    id: 2
  },
  {
    user: 'dougm',
    name: { first: 'Doug', last: 'Morin' },
    reports: [],
    receipts: [ 105 ],
    id: 3
  },
  {
    user: 'jaretts',
    name: { first: 'Jarett', last: 'Schadlich' },
    reports: [],
    receipts: [ 106 ],
    id: 4
  },
]

export const receipts = [
  {
    id: 100,
    user: 1,
    report: 1000,
    date: '2-18-2017',
    placeOfPurchase: 'American Airlines',
    comments: 'Airfare',
    amount: 576
  },
  {
    id: 101,
    user: 1,
    report: 1000,
    date: '2-18-2017',
    placeOfPurchase: 'American Airlines',
    comments: 'Airfare',
    amount: 576
  },
  {
    id: 102,
    user: 2,
    report: 1001,
    date: '2-18-2017',
    placeOfPurchase: 'American Airlines',
    comments: 'Airfare',
    amount: 576
  },
  {
    id: 103,
    user: 2,
    report: 1002,
    date: '2-18-2017',
    placeOfPurchase: 'American Airlines',
    comments: 'Airfare',
    amount: 576
  },
  {
    id: 104,
    user: 2,
    report: 1001,
    date: '2-14-2017',
    placeOfPurchase: 'AirBnb',
    comments: 'Lodging',
    amount: 1004
  },
  {
    id: 105,
    user: 3,
    report: null,
    date: '2-18-2017',
    placeOfPurchase: 'American Airlines',
    comments: 'Airfare',
    amount: 576
  },
  {
    id: 106,
    user: 4,
    report: null,
    date: '2-18-2017',
    placeOfPurchase: 'American Airlines',
    comments: 'Airfare',
    amount: 576
  }
]

export const reports = [
  {
    id: 1000,
    user: 1,
    receipts: [ 100, 101 ]
  },
  {
    id: 1001,
    user: 2,
    receipts: [ 102, 104 ]
  },
  {
    id: 1002,
    user: 2,
    receipts: [ 103 ]
  }
]
