import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Row, Col } from 'react-bootstrap';
import { GoTrashcan } from 'react-icons/go';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Memory extends Component {
  handleDelete = () => {
    this.props.deleteMemory(this.props.id);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} sm={8} style={{ paddingTop: '5px' }}>
            {this.props.text}
          </Col>
          <Col xs={12} sm={{ span: 2, offset: 2 }}>
            <ButtonGroup>
              <Button variant="outline-secondary">Edit</Button>
              <Button variant="outline-danger" onClick={this.handleDelete}>
                <GoTrashcan />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(
  null,
  actions
)(Memory);
