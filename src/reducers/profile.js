import * as actionTypes from '../constants/actionTypes';

const initialState = {
};

function fetchProfile(state, action) {
  const { user } = action;
  return { ...state, user };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_FETCH:
      return fetchProfile(state, action);
    default:
      return state;
  }
}
