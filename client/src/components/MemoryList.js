import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListGroup, Alert } from 'react-bootstrap';
import Memory from './Memory';
import { BarLoader } from 'react-spinners';

const NUMBER_LOADERS = 4;

class MemoryList extends Component {
  renderMems = () => {
    switch (this.props.memories.isFetching) {
      case true:
        return Array(NUMBER_LOADERS)
          .fill()
          .map((_, i) => {
            return (
              <ListGroup.Item
                style={{ textAlign: 'center', padding: '30px' }}
                key={`l${i}`}
              >
                <BarLoader
                  sizeUnit={'px'}
                  size={15}
                  color={'#007bff'}
                  loading={true}
                />
              </ListGroup.Item>
            );
          });
      case false:
        if (this.props.memories.errorMessage) {
          return (
            <Alert variant="danger">
              Something went wrong, sorry about that!
            </Alert>
          );
        }
        return this.props.memories.memoryList.map(
          ({ memory, _id, createdAt }) => {
            return (
              <ListGroup.Item key={_id}>
                <Memory text={memory} date={createdAt} id={_id} />
              </ListGroup.Item>
            );
          }
        );
      default:
        return (
          <Alert variant="danger">
            Something went wrong, sorry about that!
          </Alert>
        );
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
