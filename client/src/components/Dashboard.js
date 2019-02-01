import React, { Component } from 'react';
import AddMemory from './AddMemory';
import MemoryList from './MemoryList';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import Statistics from './Statistics/Statistics';
import Memory from './Memory';
import { IoIosColorWand } from 'react-icons/io';
import _ from 'lodash';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      showRandom: false,
      randomMemory: null,
    };
  }

  handleClose() {
    this.setState({ showRandom: false });
  }

  handleShow() {
    this.setState({ showRandom: true });
  }

  componentDidMount() {
    this.props.fetchMemories();
  }

  showRandomMemory = () => {
    const memory = _.sample(this.props.memories.memoryList);
    this.setState({ randomMemory: memory });
    this.handleShow();
  };

  renderRandomMemoryButton = () => {
    if (
      this.props.memories &&
      this.props.memories.memoryList &&
      this.props.memories.memoryList.length
    ) {
      return (
        <Button
          onClick={this.showRandomMemory}
          variant="outline-primary"
          style={{ width: '100%', marginBottom: '20px' }}
        >
          Random Memory Magic Fetching Button <IoIosColorWand />
        </Button>
      );
    }
  };

  renderRandomMemoryModal = () => {
    if (this.state.randomMemory) {
      return (
        <Modal show={this.state.showRandom} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Random Memory</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Memory
              text={this.state.randomMemory.memory}
              date={this.state.randomMemory.createdAt}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      );
    }
  };

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
            {this.renderRandomMemoryButton()}
          </Col>
          <Col xs={12} lg={8}>
            <MemoryList />
          </Col>
        </Row>
        {this.renderRandomMemoryModal()}
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

function mapStateToProps({ auth, memories }) {
  return { auth, memories };
}

export default connect(
  mapStateToProps,
  actions
)(Dashboard);
