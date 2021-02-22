import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  userInfo:{}
})

const reducer = (state=defaultState,action)=>{
  switch (action.type) {
    case actionTypes.CHANAGE_USER_INFO:
      return state.set('userInfo',action.userInfo)
    default:
      return state;
  }
}

export default reducer