import React, { Component } from 'react';
import AddMemory from './AddMemory';
import MemoryList from './MemoryList';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Container, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Statistics from './Statistics/Statistics';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchMemories();
  }

  render() {
    return this.props.auth !== false ? (
      <Container style={{ padding: '30px 20px' }}>
        <Row>
          <Col>
            <AddMemory />
          </Col>
        </Row>
        <Row style={{ paddingTop: '30px' }}>
          <Col xs={12} lg={4}>
            <Statistics />
          </Col>
          <Col xs={12} lg={8}>
            <MemoryList />
          </Col>
        </Row>
      </Container>
    ) : (
      <Redirect
        to={{
          pathname: '/',
          state: { from: this.props.location },
        }}
      />
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
