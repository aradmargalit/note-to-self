import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

class MemoryList extends Component {
  renderMems = () => {
    switch (this.props.memories) {
      case null:
        return;
      default:
        return this.props.memories.map(({ memory, _id }) => {
          return <ListGroup.Item key={_id}>{memory}</ListGroup.Item>;
        });
    }
  };

  render() {
    return <ListGroup>{this.renderMems()}</ListGroup>;
  }
}

function mapStateToProps({ memories }) {
  return {
    memories,
  };
}

export default connect(mapStateToProps)(MemoryList);
