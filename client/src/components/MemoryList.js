import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import Memory from './Memory';
import { BarLoader } from 'react-spinners';
import ErrorAlert from './ErrorAlert';
import moment from 'moment';

const NUMBER_LOADERS = 4;

class MemoryList extends Component {
  renderListItems = memories => {
    memories.sort(function compare(a, b) {
      var dateA = new Date(a.createdAt);
      var dateB = new Date(b.createdAt);
      return dateA - dateB;
    });

    // Reverse to get them in reverse chronological order
    return memories.reverse().map(({ memory, _id, createdAt }) => {
      return (
        <ListGroup.Item key={_id}>
          <Memory text={memory} date={createdAt} id={_id} />
        </ListGroup.Item>
      );
    });
  };

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

        return memories.memoryList.map(({ groupingDate, memories }) => {
          return (
            <div key={groupingDate} style={{ padding: '20px' }}>
              <h6>{moment(groupingDate).format('MMMM YYYY')}</h6>
              <ListGroup>{this.renderListItems(memories)}</ListGroup>
            </div>
          );
        });

      default:
        return <ErrorAlert />;
    }
  };

  render() {
    return <Fragment>{this.renderMems(this.props.memories)}</Fragment>;
  }
}

function mapStateToProps({ memories }) {
  return {
    memories,
  };
}

export default connect(mapStateToProps)(MemoryList);
