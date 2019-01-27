import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, Alert } from 'react-bootstrap';
import Memory from './Memory';
import { BarLoader } from 'react-spinners';
import ErrorAlert from './ErrorAlert';

const NUMBER_LOADERS = 4;

class MemoryList extends Component {
  renderMems = memories => {
    switch (memories.isFetching) {
      case true:
        return Array(NUMBER_LOADERS)
          .fill()
          .map((_, i) => {
            return (
              <ListGroup.Item style={{ padding: '30px' }} key={`l${i}`}>
                <BarLoader sizeUnit={'px'} size={15} color={'#007bff'} />
              </ListGroup.Item>
            );
          });

      case false:
        if (memories.errorMessage) {
          return <ErrorAlert message={memories.errorMessage} />;
        }
        return memories.memoryList.map(({ memory, _id, createdAt }) => {
          return (
            <ListGroup.Item key={_id}>
              <Memory text={memory} date={createdAt} id={_id} />
            </ListGroup.Item>
          );
        });

      default:
        return <ErrorAlert />;
    }
  };

  render() {
    return <ListGroup>{this.renderMems(this.props.memories)}</ListGroup>;
  }
}

function mapStateToProps({ memories }) {
  return {
    memories,
  };
}

export default connect(mapStateToProps)(MemoryList);
