import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './profile';

export default combineReducers({
  user,
  routing: routerReducer
});
