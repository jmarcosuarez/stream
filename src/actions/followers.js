import fetch from 'isomorphic-fetch';
import * as actionTypes from '../constants/actionTypes';

function setfollowers(followers) {
  return {
    type: actionTypes.FOLLOWER_FETCH,
    followers,
  };
}

export function fetchFollower(params) {
  return (dispatch) => {
    fetch(`//api.github.com/users/${params}/followers`)
      .then(response => response.json())
      .then((followers) => {
        dispatch(setfollowers(followers));
      });
  };
}
