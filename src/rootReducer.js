// rootReducer.js
import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const rootReducer = combineReducers({
  todo: todoReducer,
  // Diğer reducer'ları ekleyebilirsiniz
});

export default rootReducer;
