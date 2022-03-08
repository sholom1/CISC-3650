import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';
import { Form, InputGroup, Button } from 'react-bootstrap';

class Task extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: props.name,
      subtasks: []
    };
  }
  render() {
    return <Form.Group control-id={`task-${this.state.name.replace(' ', '-').toLowerCase()}`}>
        <InputGroup >
          <InputGroup.Checkbox variant="outline-secondary" type="checkbox" id="default-checkbox"/>
          <InputGroup.Text className="flex-fill" variant="outline-secondary" id="inputGroup-sizing-default">{this.state.name}</InputGroup.Text>
          <Button variant="outline-secondary" id="button-addon2">
            +
          </Button>
        </InputGroup>
      </Form.Group>
  };
}

export default Task;
