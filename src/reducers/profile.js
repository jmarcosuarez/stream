import * as actionTypes from '../constants/actionTypes';

const initialState = {
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_FETCH:
      return fetchProfile(state, action);
  }
  return state;
}

function fetchProfile(state, action) {
  const { user } = action;
  return { ...state, user };
}
