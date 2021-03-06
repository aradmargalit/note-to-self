import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AddMemory extends Component {
  constructor(props) {
    super(props);

    this.state = { memory: '' };
  }

  handleSubmit = () => {
    const memory = {
      text: this.state.memory,
    };

    if (!memory.text || memory.text.length < 1) {
      return;
    }

    this.props.submitMemory(memory);
    this.setState({ memory: '' });
  };

  onEnterPressed = event => {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  };

  render() {
    return (
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Enter a memory..."
          aria-label="Enter a memory..."
          aria-describedby="basic-addon2"
          value={this.state.memory}
          onChange={event => this.setState({ memory: event.target.value })}
          onKeyPress={this.onEnterPressed}
        />
        <InputGroup.Append>
          <Button type="submit" onClick={this.handleSubmit}>
            Submit
          </Button>
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default connect(
  null,
  actions
)(AddMemory);
