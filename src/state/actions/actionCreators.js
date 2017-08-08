import * as t from './actionTypes';

export const fetchAuth = auth => ({
  type: t.FETCH_AUTH,
  auth
});

export const fetchUsers = users => ({
  type: t.FETCH_USERS,
  users
});

export const fetchReceipts = receipts => ({
  type: t.FETCH_RECEIPTS,
  receipts
});

export const fetchReports = reports => ({
  type: t.FETCH_REPORTS,
  reports
});
