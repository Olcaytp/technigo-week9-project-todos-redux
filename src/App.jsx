import { Provider } from 'react-redux';
import store from './store';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

export const App = () => {
  return (
    <Provider store={store}>
    <div className="app-container">
      <h1 className="app-header">Redux Todo App</h1>
      <AddTaskForm />
      <TaskList />
    </div>
  </Provider>
  );
};
