import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';
import { Form, InputGroup, Button } from 'react-bootstrap';

class Task extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      name: props.name,
      subtasks: []
    };
    this.toggleTaskCreation = this.toggleTaskCreation.bind(this);
  }
  render() {
    return <Form.Group className={this.props.className + " my-1"} control-id={`task-${this.state.name.replace(' ', '-').toLowerCase()}`}>
        <InputGroup>
          <InputGroup.Checkbox type="checkbox" id="default-checkbox basic-addon1"/>
          <InputGroup.Text className="flex-fill" variant="outline-secondary" id="inputGroup-sizing-default">{this.state.name}</InputGroup.Text>
          <Button onClick={this.toggleTaskCreation} variant="outline-secondary" id="button-addon2">
            +
          </Button>
          <Button varient='primary' label="Delete task">
            <img src='/trash.svg'></img>
          </Button>
        </InputGroup>
        {this.state.subtasks.map((taskName, index)=>{
          return <Task className="ms-4" name={taskName} key={index}/>
        })}
      </Form.Group>
  };
  toggleTaskCreation(event){
    event.preventDefault();
    this.setState((state) => ({subtasks: [...state.subtasks, "Default task"]}))
  }
}

export default Task;
