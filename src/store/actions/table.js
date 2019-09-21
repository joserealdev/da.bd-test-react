import * as actionTypes from '../types'

export const setUserInfo = (userInfo) => ({
  type: actionTypes.SET_USERINFO,
  userInfo
})

export const fetchUserInfoFailed = (e) => ({
  type: actionTypes.FETCH_USERINFO_FAILED,
  error: e
})

export const initUserInfo = () => ((dispatch) => {
  fetch('https://jsonplaceholder.typicode.com/users/').then((response) => response.json())
    .then((json) => {
      dispatch(setUserInfo(json))
    })
    .catch((error) => {
      dispatch(fetchUserInfoFailed(error))
    })
})
