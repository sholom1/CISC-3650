import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';
import { Form } from 'react-bootstrap';

const TodoList = (props) => (
  <div className={styles.TodoList} data-testid="TodoList">
    TodoList Component
    <Form>
      {props.tasks.map((task, index) => {
        return <Form.Check key={index} type="checkbox" id="default-checkbox" label={task}/> 
      })}
    </Form>
  </div>
);

TodoList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string)
};

TodoList.defaultProps = {
  tasks:["task 1", "task 2", "task 3"]
};

export default TodoList;
