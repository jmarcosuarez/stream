import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './profile';
import followers from './followers';

export default combineReducers({
  user,
  followers,
  routing: routerReducer,
});
