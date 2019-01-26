import React, { Component } from 'react';
import AddMemory from './AddMemory';
import MemoryList from './MemoryList';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Container } from 'react-bootstrap';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchMemories();
  }

  render() {
    return (
      <Container style={{ padding: '30px 20px' }}>
        <AddMemory />
        <h4 style={{ paddingTop: '30px' }}>Your Memories</h4>
        <MemoryList />
      </Container>
    );
  }
}

export default connect(
  null,
  actions
)(Dashboard);
