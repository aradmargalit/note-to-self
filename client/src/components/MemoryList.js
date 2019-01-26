import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import Memory from './Memory';
import { BarLoader } from 'react-spinners';

const NUMBER_LOADERS = 4;

class MemoryList extends Component {
  renderMems = () => {
    switch (this.props.memories) {
      case null:
        return Array(NUMBER_LOADERS)
          .fill()
          .map((_, i) => {
            return (
              <ListGroup.Item style={{ textAlign: 'center' }} key={`l${i}`}>
                <BarLoader
                  sizeUnit={'px'}
                  size={15}
                  color={'#007bff'}
                  loading={true}
                />
              </ListGroup.Item>
            );
          });

      default:
        return this.props.memories.map(({ memory, _id, createdAt }) => {
          return (
            <ListGroup.Item key={_id}>
              <Memory text={memory} date={createdAt} id={_id} />
            </ListGroup.Item>
          );
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
