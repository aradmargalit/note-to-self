import { combineReducers } from 'redux';
import authReducer from './authReducer';
import memoryReducer from './memoryReducer'

export default combineReducers({
  auth: authReducer,
  memories: memoryReducer
});
