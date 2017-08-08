import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAuth, fetchUsers, fetchReceipts, fetchReports } from '../state/actions/actionCreators';
import { withRouter } from 'react-router-dom';

import ErrorBoundary from './ErrorBoundary';
import AuthRoute from './AuthRoute';
import UserContainer from './authorized/UserContainer';
import Login from './unauthorized/Login';

import { authenticated, users, receipts, reports } from '../data';

class AppContainer extends Component {

  componentWillMount() {

    const { fetchAuth, fetchUsers, fetchReceipts, fetchReports } = this.props;

    fetchAuth(authenticated);
    fetchUsers(users);
    fetchReceipts(receipts);
    fetchReports(reports);

  }

  render() {
    return (
      <ErrorBoundary>
        <Redirect from={'/'} to={`/${authenticated.username}`} />
        <Switch>
          <AuthRoute path={`/${authenticated.username}`} component={UserContainer} />
          <Route path='/unauthorized' component={Login} />
        </Switch>
      </ErrorBoundary>
    )
  }

}

export default withRouter(connect(null, { fetchAuth, fetchUsers, fetchReceipts, fetchReports })(AppContainer));
