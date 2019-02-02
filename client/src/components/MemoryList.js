import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ListGroup, Button } from 'react-bootstrap';
import Memory from './Memory';
import { BarLoader } from 'react-spinners';
import { GoSync } from 'react-icons/go';
import ErrorAlert from './ErrorAlert';
import moment from 'moment';
import _ from 'lodash';
import * as actions from '../actions';

const DATE_FORMAT = 'YYYY-MM';

const NUMBER_LOADERS = 4;

class MemoryList extends Component {
  tryRefresh = () => {
    this.props.fetchMemories();
    this.props.fetchUser();
  };

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
          return (
            <div>
              <ErrorAlert message={memories.errorMessage} />
              <Button onClick={this.tryRefresh} style={{ marginTop: '10px' }}>
                Retry <GoSync />
              </Button>
            </div>
          );
        }

        memories.groupedMemoryList = groupMemories(memories.memoryList);
        return memories.groupedMemoryList.map(({ groupingDate, memories }) => {
          return (
            <div key={groupingDate} style={{ paddingBottom: '20px' }}>
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

// Helper to group memories into months
function groupMemories(memories) {
  memories.forEach(
    datum =>
      (datum['groupingDate'] = moment(datum['createdAt']).format(DATE_FORMAT))
  );

  // Group memories by MM/YYYY
  // Create a dict of MM/YYYY => [mem1, mem2]
  return _.chain(memories)
    .groupBy('groupingDate')
    .toPairs()
    .map(pair => _.zipObject(['groupingDate', 'memories'], pair))
    .value();
}

function mapStateToProps({ memories }) {
  return {
    memories,
  };
}
export default connect(
  mapStateToProps,
  actions
)(MemoryList);
