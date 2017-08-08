import * as t from '../actions/actionTypes';

const test = (state = [], action) => {
  switch (action.type) {
    case t.FETCH_AUTH:
      return state = Object.assign({}, state, {
        auth: action.auth
      });
    case t.FETCH_USERS:
      return state = Object.assign({}, state, {
        users: action.users
      });
    case t.FETCH_RECEIPTS:
      return state = Object.assign({}, state, {
        receipts: action.receipts
      });
    case t.FETCH_REPORTS:
      return state = Object.assign({}, state, {
        reports: action.reports
      });
    default:
      return state;
  }
}

export default test;
