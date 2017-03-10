import fetch from 'isomorphic-fetch';
import * as actionTypes from '../constants/actionTypes';

// function followerPaginate(url) {
//   return {
//     type: actionTypes.PAGINATION_FOLLOWER,
//     url,
//   };
// }

export function followerPaginate(url) {
  console.log(url, 'this is followerPaginate action');

  // return (dispatch) => {
  //   fetch(`//api.github.com/users/${params}`)
  //     .then(response => response.json())
  //     .then((user) => {
  //       dispatch(setNewUser(user));
  //     });
  // };
}
