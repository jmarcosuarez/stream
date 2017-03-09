import * as actionTypes from '../constants/actionTypes';

const initialState = {
};

function fetchFollower(state, action) {
  const { followers } = action;
  return { ...state, followers };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.FOLLOWER_FETCH:
      return fetchFollower(state, action);
    default:
      return state;
  }
}
