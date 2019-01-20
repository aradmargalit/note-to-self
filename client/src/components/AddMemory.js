import React, { Component } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AddMemory extends Component {
  constructor(props) {
    super(props);

    this.state = { memory: null };
  }

  handleSubmit = () => {
    const memory = {
      text: this.state.memory,
    };

    this.props.submitMemory(memory);
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
