import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const AuthRoute = (props) => {

  const { component: Component, auth, users, receipts, reports } = props;

  return (
    <Route render={ props => (
        auth.loggedIn
        ? <Component { ...props } auth={auth} users={users} receipts={receipts} reports={reports} />
        : <Redirect to='/unauthorized' />
    )} />
  )

}

const mapStateToProps = state => ({
  auth: state.test.auth,
  users: state.test.users,
  receipts: state.test.receipts,
  reports: state.test.reports
});

export default withRouter(connect(mapStateToProps)(AuthRoute));
