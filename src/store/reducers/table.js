import * as actionTypes from '../types'

const initialState = {
  tableInfo: null,
  error: false
}

const setUserInfo = (state, action) => ({
  ...state,
  ...{
    tableInfo: action.userInfo,
    error: false
  }
})

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USERINFO:
      return setUserInfo(state, action)
    case actionTypes.FETCH_USERINFO_FAILED:
      return { ...state, ...{ error: true } }
    default:
      return state
  }
}

export default reducer
