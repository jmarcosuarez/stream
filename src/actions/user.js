import fetch from 'isomorphic-fetch';
import * as actionTypes from '../constants/actionTypes';

function setNewUser(user) {
  return {
    type: actionTypes.USER_FETCH,
    user,
  };
}

export function fetchUser(params) {
  return (dispatch) => {
    fetch(`//api.github.com/users/${params}`)
      .then(response => response.json())
      .then((user) => {
        dispatch(setNewUser(user));
      });
  };
}
