import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';
import { Form } from 'react-bootstrap';

const TodoList = () => (
  <div className={styles.TodoList} data-testid="TodoList">
    TodoList Component
    <Form>
      <Form.Check type="checkbox" id="default-checkbox" label="First checkbox"/>
    </Form>
  </div>
);

TodoList.propTypes = {};

TodoList.defaultProps = {};

export default TodoList;
