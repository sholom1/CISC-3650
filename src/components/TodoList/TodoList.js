import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';
import { Button, Form, InputGroup, FormControl } from 'react-bootstrap';
import Task from '../Task/Task';
import { v4 as uuidv4 } from 'uuid';
import generateNewTask from '../Task/TaskHelperFunctions';

class TodoList extends React.Component {
  constructor(props){ 
    super(props)
    this.state = {
      tasks: [...(props.tasks.map(task => generateNewTask(task)))]
    }
    this.toggleTaskCreation = this.toggleTaskCreation.bind(this);
    this.onRemoveTask = this.onRemoveTask.bind(this);
  };
  render(){
    return <div className={styles.TodoList} data-testid="TodoList">
        TodoList Component
        <Form onSubmit={(event)=>event.preventDefault()}>
          {this.state.tasks.map((task, index) => {
            return <Task name={task.name} key={task.id} onDelete={(event)=>this.onRemoveTask(event, index)}/>
          })}
          <Button variant='primary' label="Add task" onClick={this.toggleTaskCreation}>Add task</Button>
        </Form>
      </div>
  }
  toggleTaskCreation(event){
    event.preventDefault();
    this.setState((state) => ({tasks: [...state.tasks, generateNewTask()]}))
  }
  onRemoveTask(event, index){
    event.preventDefault();
    this.setState(state => {
      let reducedTasks = [...state.tasks]
      reducedTasks.splice(index, 1);
      return {tasks: [...reducedTasks]};
    })
  }
}

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string)
};

TodoList.defaultProps = {
  tasks:["task 1", "task 2", "task 3"]
};

export default TodoList;
