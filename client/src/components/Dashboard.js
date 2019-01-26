import React, { Component } from 'react';
import AddMemory from './AddMemory';
import MemoryList from './MemoryList';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchMemories();
  }

  render() {
    return (
      <div className="container" style={{ padding: '30px 0' }}>
        <AddMemory />
        <h4 style={{ paddingTop: '30px' }}>Your Memories</h4>
        <MemoryList />
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Dashboard);
