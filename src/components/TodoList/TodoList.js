import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import Task from '../Task/Task';

class TodoList extends React.Component {
  constructor(props){ 
    super(props)
    this.state = {
      tasks: [...props.tasks]
    }
    this.toggleTaskCreation = this.toggleTaskCreation.bind(this);
    this.handleTaskCreation = this.handleTaskCreation.bind(this);
  };
  render(){
    return <div className={styles.TodoList} data-testid="TodoList">
        TodoList Component
        <Form onSubmit={(event)=>event.preventDefault()}>
          {this.state.tasks.map((task, index) => {
            return <Task name={task} key={index}/>
          })}
          {this.state.creatingTask ? <InputGroup>
            <Button variant="outline-primary" onClick={this.toggleTaskCreation} id="button-addon1">
              Add Task
            </Button>
            <FormControl
              aria-label="text with button addon"
              aria-describedby="basic-addon1"
              name="newTaskName"
              value={this.state.newTaskName}
              onChange={this.handleTaskCreation}
            />
          </InputGroup> 
          : 
          <Button variant='primary' label="Add task" onClick={this.toggleTaskCreation}>Add task</Button>}
        </Form>
      </div>
  }
  toggleTaskCreation(event){
    event.preventDefault();
    
    this.setState((state,props)=>({creatingTask: !state.creatingTask}))
    if (this.state.newTask?.length > 0)
      this.setState((state) => ({tasks: [...state.tasks, state.newTask], newTask : ''}))
    console.log(this.state);
  }
  handleTaskCreation(event){
    event.preventDefault();
    console.log(event)
    this.setState((state)=> ({newTask: event.target.value}))
  }
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string)
};

TodoList.defaultProps = {
  tasks:["task 1", "task 2", "task 3"]
};

export default TodoList;
