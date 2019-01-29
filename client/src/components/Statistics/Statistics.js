import React, { Component, Fragment } from 'react';
import { Jumbotron, Row, Col } from 'react-bootstrap';
import { GoDashboard, GoPulse, GoClock } from 'react-icons/go';
import Countup from 'react-countup';
import { connect } from 'react-redux';
import { RingLoader } from 'react-spinners';
import ErrorAlert from '../ErrorAlert';
import moment from 'moment';

import './Statistics.css';

class Statistics extends Component {
  getDaysSinceLastEntry = memoryList => {
    if (memoryList.length) {
      memoryList.sort(function compare(a, b) {
        var dateA = new Date(a.createdAt);
        var dateB = new Date(b.createdAt);
        return dateA - dateB;
      });

      return moment(memoryList.reverse()[0]['createdAt']).fromNow();
    } else {
      return '∞';
    }
  };

  renderStatistics = ({ isFetching, errorMessage, memoryList }) => {
    switch (isFetching) {
      case true:
        return <RingLoader />;

      case false:
        // Do not show errors, as they'll be shown elsewhere on the page
        if (errorMessage) return null;
        return [
          <Row key="numMems">
            <Col>
              <h5>
                Number of Memories <GoPulse />
              </h5>
              <Countup end={memoryList.length} />
            </Col>
          </Row>,
          <Row key="timeSince" style={{ paddingTop: '20px' }}>
            <Col>
              <h5>
                Time Since Last Entry <GoClock />
              </h5>
              <p>{this.getDaysSinceLastEntry(memoryList)}</p>
            </Col>
          </Row>,
        ];

      default:
        return <ErrorAlert />;
    }
  };

  render() {
    return (
      <Fragment>
        <h4>
          Statistics <GoDashboard />
        </h4>
        <Jumbotron>{this.renderStatistics(this.props.memories)}</Jumbotron>
      </Fragment>
    );
  }
}

function mapStateToProps({ memories }) {
  return {
    memories,
  };
}

export default connect(mapStateToProps)(Statistics);
