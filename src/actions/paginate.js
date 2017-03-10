import fetch from 'isomorphic-fetch';
import * as actionTypes from '../constants/actionTypes';

function setfollowers(followers) {
  return {
    type: actionTypes.FOLLOWER_FETCH,
    followers,
  };
}

export function followerPaginate(url) {
  return (dispatch) => {
    fetch(url)
      .then(response => response.json())
      .then((user) => {
        dispatch(setfollowers(user));
      });
  };
}
