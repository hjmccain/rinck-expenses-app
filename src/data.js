export const authenticated = {
  loggedIn: true,
  userID: 2,
  username: 'natep'
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
    report: 1000
  },
  {
    id: 101,
    user: 1,
    report: null
  },
  {
    id: 102,
    user: 2,
    report: null
  },
  {
    id: 103,
    user: 2,
    report: null
  },
  {
    id: 104,
    user: 2,
    report: null
  },
  {
    id: 105,
    user: 3,
    report: null
  },
  {
    id: 106,
    user: 4,
    report: null
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
