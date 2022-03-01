import React from 'react';
import PropTypes from 'prop-types';
import styles from './Task.module.css';

const Task = () => (
  <div className={styles.Task} data-testid="Task">
    Task Component
  </div>
);

Task.propTypes = {};

Task.defaultProps = {};

export default Task;
