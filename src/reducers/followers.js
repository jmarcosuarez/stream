import * as actionTypes from '../constants/actionTypes';

const initialState = {
};

function fetchFollower(state, action) {
  const { followers } = action;
  return { ...state, followers };
}

function paginationFollower(state, action) {
  const { links } = action;
  return { ...state, links };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FOLLOWER_FETCH:
      return fetchFollower(state, action);
    case actionTypes.PAGINATION_FOLLOWER:
      return paginationFollower(state, action);
    default:
      return state;
  }
}
