import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  userInfo: '',
  userStatus: false
})

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_USER_INFO:
      return state.set('userInfo', action.userInfo)
    case actionTypes.CHANGE_USER_STATUS:
      return state.set('userStatus', action.userStatus)
    default:
      return state;
  }
}

export default reducer