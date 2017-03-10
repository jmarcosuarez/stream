import fetch from 'isomorphic-fetch';
import parse from 'parse-link-header';

import * as actionTypes from '../constants/actionTypes';

function setfollowers(followers) {
  return {
    type: actionTypes.FOLLOWER_FETCH,
    followers,
  };
}

function setLinks(links) {
  return {
    type: actionTypes.PAGINATION_FOLLOWER,
    links,
  };
}

export const fetchFollower = params => (dispatch) => {
  fetch(`//api.github.com/users/${params}/followers`)
  .then((response) => {
    if (response.headers.has('Link')) {
      dispatch(setLinks(parse(response.headers.get('Link'))));
    }
    return response.json();
  })
  .then((followers) => {
    dispatch(setfollowers(followers));
  });
};
