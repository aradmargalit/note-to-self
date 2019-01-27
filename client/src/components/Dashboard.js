import React, { Component } from 'react';
import AddMemory from './AddMemory';
import MemoryList from './MemoryList';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchMemories();
  }

  render() {
    return this.props.auth !== false ? (
      <Container style={{ padding: '30px 20px' }}>
        <AddMemory />
        <h4 style={{ paddingTop: '30px' }}>Your Memories</h4>
        <MemoryList />
      </Container>
    ) : (
      <Redirect
        to={{
          pathname: '/',
          state: { from: this.props.location },
        }}
      />
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
