// TaskList.jsx
import React from 'react';
import { connect } from 'react-redux';
import { removeTask, toggleTaskCompletion, completeAllTasks, setFilter, uncompleteAllTasks } from './todoReducer';

const TaskList = ({ tasks, filter,dispatch, selectedCategory }) => {
  
  const handleRemoveTask = taskId => {
    dispatch(removeTask(taskId));
  };
  const handleToggleTaskCompletion = taskId => {
    dispatch(toggleTaskCompletion(taskId));
  };
  const handleCompleteAllTasks = () => {
    dispatch(completeAllTasks());
  };
  const handleUncompleteAllTasks = () => {
    dispatch(uncompleteAllTasks());
  };
  const handleSetFilter = (newFilter) => {
    dispatch(setFilter(newFilter));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed' && task.completed) {
      return true;
    } else if (filter === 'uncompleted' && !task.completed) {
      return true;
    } else if (selectedCategory && task.category === selectedCategory) {
      return true;
    }
    // Add more filters as needed
    return false;
  });

  const countAllTasks = tasks.length;
  const countUncompletedTasks = tasks.filter((task) => !task.completed).length;

  if (countAllTasks === 0) {
    return <p>No tasks available. Add a task to get started!</p>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Tasks</h2>
      <div>
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => handleSetFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "completed" ? "active" : ""}
          onClick={() => handleSetFilter("completed")}
        >
          Completed
        </button>
        <button
          className={filter === "uncompleted" ? "active" : ""}
          onClick={() => handleSetFilter("uncompleted")}
        >
          Uncompleted
        </button>
      </div>
      <p>Total Tasks: {countAllTasks}</p>
      <p>Uncompleted Tasks: {countUncompletedTasks}</p>
      <button className="btn btn-primary" onClick={handleCompleteAllTasks}>
        Complete All
      </button>
      <button className="btn btn-warning" onClick={handleUncompleteAllTasks}>
        Uncomplete All
      </button>
      <ul className="list-group">
        {tasks.map((task) => (
          <li key={task.id} className={`list-group-item ${task.completed ? 'completed' : ''}`}>
            <span>{task.text}</span>
            <p>Created: {new Date(task.createdAt).toLocaleString()} </p>
            <p>Completed: {task.completed ? "Yes" : "No"}</p>
            <button
              className={`btn ${task.completed ? "btn-success" : "btn-danger"}`}
              onClick={() => handleToggleTaskCompletion(task.id)}
            >
              {task.completed ? "Uncomplete" : "Complete"}
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
  filter: state.todo.filter,
  selectedCategory: state.todo.selectedCategory,

});

export default connect(mapStateToProps)(TaskList);
