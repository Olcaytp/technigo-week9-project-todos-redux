// AddTaskForm.jsx
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTask } from './todoReducer';

const AddTaskForm = ({ dispatch }) => {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = e => {
    setTaskText(e.target.value);
  };

  const handleAddTask = () => {
    if (taskText.trim() !== '') {
      dispatch(addTask({
        id: new Date().getTime(),
        text: taskText,
      }));
      setTaskText('');
    }
  };

  return (
    <div className="card add-task-form">
      <div className="card-body">
        <h2 className="card-title">Add Task</h2>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={taskText}
            onChange={handleInputChange}
            placeholder="Task text"
          />
        </div>
        <button
          className="btn btn-primary"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default connect()(AddTaskForm);
