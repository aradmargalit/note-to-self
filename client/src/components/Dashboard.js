import React, { Component } from 'react';
import AddMemory from './AddMemory';
import MemoryList from './MemoryList';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {
  render() {
    return (
      <div className="container" style={{ padding: '30px 0' }}>
        <AddMemory />
        <h3>Memories: </h3>
        <MemoryList />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Dashboard);
