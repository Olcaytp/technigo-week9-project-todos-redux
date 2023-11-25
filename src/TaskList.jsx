// TaskList.jsx
import React from 'react';
import { connect } from 'react-redux';
import { removeTask, toggleTaskCompletion, completeAllTasks   } from './todoReducer';

const TaskList = ({ tasks, dispatch }) => {
  const handleRemoveTask = taskId => {
    dispatch(removeTask(taskId));
  };
  const handleToggleTaskCompletion = taskId => {
    dispatch(toggleTaskCompletion(taskId));
  };
  const handleCompleteAllTasks = () => {
    dispatch(completeAllTasks());
  };

  const countAllTasks = tasks.length;
  const countUncompletedTasks = tasks.filter((task) => !task.completed).length;

  if (countAllTasks === 0) {
    return <p>No tasks available. Add a task to get started!</p>;
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Tasks</h2>
      <p>Total Tasks: {countAllTasks}</p>
      <p>Uncompleted Tasks: {countUncompletedTasks}</p>
      <button className="btn btn-primary" onClick={handleCompleteAllTasks}>
        Complete All
      </button>
      <ul className="list-group" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {tasks.map((task) => (
          <li key={task.id} className={`list-group-item ${task.completed ? 'completed' : ''}`}>
            <span>{task.text}</span>
            <button
              className={`btn ${task.completed ? 'btn-success' : 'btn-danger'}`}
              onClick={() => handleToggleTaskCompletion(task.id)}
            >
              {task.completed ? 'Uncomplete' : 'Complete'}
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleRemoveTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = state => ({
  tasks: state.todo.tasks,
});

export default connect(mapStateToProps)(TaskList);
