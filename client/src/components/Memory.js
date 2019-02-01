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
import EditMemory from './EditMemory';

const DATE_FORMAT = 'MM/DD/YYYY';

class Memory extends Component {
  constructor(props) {
    super(props);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleDelete = () => {
    this.props.deleteMemory(this.props.id);
  };

  renderButtons = () => {
    if (this.props.id) {
      return (
        <ButtonGroup className="pull-right float-right">
          <Button variant="outline-secondary" onClick={this.handleShow}>
            Edit
          </Button>
          <Button variant="outline-danger" onClick={this.handleDelete}>
            <GoTrashcan />
          </Button>
        </ButtonGroup>
      );
    }
  };

  render() {
    let modal = {
      title: 'Edit Memory',
      text: this.props.text,
    };

    return (
      <Container>
        <Row style={{ marginRight: '-40px' }}>
          <Col xs={12} sm={8} style={{ paddingTop: '5px' }}>
            <strong>{this.props.text}</strong>
          </Col>
          <Col xs={12} sm={{ span: 2, offset: 2 }}>
            {this.renderButtons()}
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12}>
            <Badge
              pill
              variant={
                moment(this.props.date).isSame(moment(), 'day')
                  ? 'success'
                  : 'secondary'
              }
            >
              {moment(this.props.date).format(DATE_FORMAT)}
            </Badge>
          </Col>
        </Row>
        <EditMemory
          show={this.state.show}
          handleClose={this.handleClose}
          modal={modal}
          id={this.props.id}
        />
      </Container>
    );
  }
}

export default connect(
  null,
  actions
)(Memory);
