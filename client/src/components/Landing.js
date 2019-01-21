import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Landing extends Component {
  render() {
    return this.props.auth ? (
      <Redirect
        to={{
          pathname: '/dashboard',
          state: { from: this.props.location },
        }}
      />
    ) : (
      <div style={{ textAlign: 'center' }}>
        <h1>Note to Self</h1>
        You know what to do. Write it!
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Landing);
