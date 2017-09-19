import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';

const AuthRoute = (props) => {

  const { authComponent: Component, auth, users, receipts, reports, etc } = props;

  return (
    <ErrorBoundary>
      <Route render={ props => (
          auth.loggedIn ?
            <Component { ...props }
              authClass="authorized"
              auth={auth}
              users={users}
              receipts={receipts}
              reports={reports}
              etc={etc} />
          : <Redirect to='/unauthorized' />
      )} />
    </ErrorBoundary>
  )

}

const mapStateToProps = state => ({
  auth: state.test.auth,
  users: state.test.users,
  receipts: state.test.receipts,
  reports: state.test.reports
});

export default withRouter(connect(mapStateToProps)(AuthRoute));
