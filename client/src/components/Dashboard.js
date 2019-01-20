import React, { Component } from 'react';
import AddMemory from './AddMemory';

class Dashboard extends Component {
  render() {
    return (
      <div className="container" style={{ padding: '30px 0' }}>
        <AddMemory />
      </div>
    );
  }
}

export default Dashboard;
