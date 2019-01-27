import React, { Component, Fragment } from 'react';
import { Alert } from 'react-bootstrap';

class ErrorAlert extends Component {
  renderMessage() {
    if (this.props.message) {
      return <Alert variant="warning">{this.props.message}</Alert>;
    }
  }

  render() {
    return (
      <Fragment>
        <Alert variant="danger">Something went wrong, sorry about that!</Alert>
        {this.renderMessage()}
      </Fragment>
    );
  }
}

export default ErrorAlert;
