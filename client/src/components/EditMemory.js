import React, { Component } from 'react';
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';

class EditMemory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memory: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    alert(`Would have updated to: ${this.state.memory}`);
    this.props.handleClose();
  }

  render() {
    return (
      <Modal size="lg" show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.modal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              as="textarea"
              placeholder={this.props.modal.text}
              aria-label="Edit"
              aria-describedby="basic-addon2"
              value={this.state.memory}
              onChange={event => this.setState({ memory: event.target.value })}
              onKeyPress={this.onEnterPressed}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button variant="outline-primary" onClick={this.handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default EditMemory;
