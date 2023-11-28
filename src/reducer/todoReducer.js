// todoReducer.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
    filter: 'all', // Default filter is 'all'
  },
  reducers: {
    addTask: (state, action) => {
      const { text, dueDate, categories  } = action.payload;
      const timestamp = Date.now();

      const newTask = {
        id: state.tasks.length + 1,
        text,
        completed: false,
        createdAt: timestamp,
        dueDate,
        categories: categories || [],
      };

      state.tasks.push(newTask);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    completeAllTasks: (state) => {
      state.tasks.forEach((task) => {
        task.completed = true;
      });
    },
    uncompleteAllTasks: (state) => {
      state.tasks.forEach((task) => {
        task.completed = false;
      });
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const { addTask, removeTask, toggleTaskCompletion, completeAllTasks, setFilter, uncompleteAllTasks  } = todoSlice.actions;

export default todoSlice.reducer;
