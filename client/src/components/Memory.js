import React, { Component } from 'react';
import {
  Button,
  Badge,
  ButtonGroup,
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import { GoTrashcan } from 'react-icons/go';
import { connect } from 'react-redux';
import * as actions from '../actions';
import moment from 'moment';

const DATE_FORMAT = 'dddd, MMMM Do YYYY';

class Memory extends Component {
  handleDelete = () => {
    this.props.deleteMemory(this.props.id);
  };

  render() {
    const createdAt = moment(this.props.date);
    console.log(createdAt.format('dddd, MMMM Do YYYY, h:mm:ss a'));

    return (
      <Container>
        <Row style={{ marginRight: '-40px' }}>
          <Col xs={12} sm={8} style={{ paddingTop: '5px' }}>
            {this.props.text}
          </Col>
          <Col xs={12} sm={{ span: 2, offset: 2 }}>
            <ButtonGroup className="pull-right float-right">
              <Button variant="outline-secondary">Edit</Button>
              <Button variant="outline-danger" onClick={this.handleDelete}>
                <GoTrashcan />
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12}>
            <Badge pill variant="secondary">
              {moment(this.props.date).format(DATE_FORMAT)}
            </Badge>
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
