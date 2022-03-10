import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';
import { Form, InputGroup, Button, FormControl } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import generateNewTask from './TaskHelperFunctions';

class Task extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      renaming: false,
      subtasks: [],
      isChecked: false
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.toggleRenameTask = this.toggleRenameTask.bind(this);
    this.handleRenameTask = this.handleRenameTask.bind(this);
    this.onRemoveTask = this.onRemoveTask.bind(this);
    this.handleCompletion = this.handleCompletion.bind(this);
  }
  render() {
    return <Form.Group className={this.props.className + " my-1"} control-id={`task-${this.props.name.replace(' ', '-').toLowerCase()}`}>
        <InputGroup>
          <InputGroup.Checkbox onChange={this.handleCompletion} checked={this.props.forceCheck || this.state.isChecked} type="checkbox" id="default-checkbox basic-addon1"/>
          <FormControl className="flex-fill" variant="outline-secondary" id="inputGroup-sizing-default" value={this.props.name} readOnly={!this.state.renaming} onChange={event => this.props.onNameChange(event, this.props.id)}/>
          <FormControl className="flex-shrink-0" type="date" size="sm"/>
          <Button variant='primary' label="Rename task" onClick={this.toggleRenameTask}>
            <img src='/vector-pen.svg'/>
          </Button>
          <Button onClick={this.addNewTask} variant="primary" id="button-addon2">
            +
          </Button>
          <Button variant='danger' label="Delete task" onClick={this.props.onDelete}>
            <img src='/trash.svg'></img>
          </Button>
        </InputGroup>
        {this.state.subtasks.map((task, index)=>{
          return <Task forceCheck={this.state.isChecked || this.props.forceCheck} className="ms-4" name={task.name} key={task.id} id={task.id} onDelete={(event) => this.onRemoveTask(event, index)} onNameChange={this.handleRenameTask}/>
        })}
      </Form.Group>
  };
  addNewTask(event){
    this.setState((state) => ({subtasks: [...state.subtasks, generateNewTask()]}))
  }
  toggleRenameTask(){
    this.setState(state => ({renaming: !state.renaming}));
  }
  onRemoveTask(event, index){
    this.setState(state => {
      let reducedTasks = [...state.subtasks]
      reducedTasks.splice(index, 1);
      return {subtasks: [...reducedTasks]};
    })
  }
  handleCompletion(event){
    this.setState(state => ({isChecked: !state.isChecked}))
  }
  handleRenameTask(event, id){
    this.setState((state) => {
      state.subtasks.find(task => task.id === id).name = event.target.value;
      return {subtasks: [...state.subtasks]}
    })
  }
}

export default Task;
