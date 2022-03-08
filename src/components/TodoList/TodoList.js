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
  };
  render(){
    return <div className={styles.TodoList} data-testid="TodoList">
        TodoList Component
        <Form onSubmit={(event)=>event.preventDefault()}>
          {this.state.tasks.map((task, index) => {
            return <Task name={task} key={index}/>
          })}
          <Button variant='primary' label="Add task" onClick={this.toggleTaskCreation}>Add task</Button>
        </Form>
      </div>
  }
  toggleTaskCreation(event){
    event.preventDefault();
    this.setState((state) => ({tasks: [...state.tasks, "Default task"]}))
  }
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string)
};

TodoList.defaultProps = {
  tasks:["task 1", "task 2", "task 3"]
};

export default TodoList;
