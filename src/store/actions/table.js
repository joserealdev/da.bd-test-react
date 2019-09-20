import * as actionTypes from "../types";

export const setUserInfo = userInfo => {
  return {
    type: actionTypes.SET_USERINFO,
    userInfo: userInfo
  };
};

export const fetchUserInfoFailed = e => {
  return {
    type: actionTypes.FETCH_USERINFO_FAILED,
    error: e
  };
};

export const initUserInfo = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/users/').then(response => response.json())
    .then(json => {
      dispatch(setUserInfo(json));
    })
    .catch(error => {
      dispatch(fetchUserInfoFailed(error));
    })
  };
};