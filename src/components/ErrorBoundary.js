import React, { Component } from 'react';

class ErrorBoundary extends Component {

  state = { hasError: false }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong! More info: {this.state}</p>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
