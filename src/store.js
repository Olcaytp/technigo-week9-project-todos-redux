// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';

const store = configureStore({
    reducer: rootReducer,
  });
  
  export default store;
