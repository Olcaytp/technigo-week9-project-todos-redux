// todoReducer.js
import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
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
  },
});

export const { addTask, removeTask, toggleTaskCompletion, completeAllTasks  } = todoSlice.actions;

export default todoSlice.reducer;
