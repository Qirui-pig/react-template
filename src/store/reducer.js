import { combineReducers } from 'redux-immutable'

import { reducer as userReducer } from '../pages/home/store'

const cReducer = combineReducers({
  // 试例
  user: userReducer,
})

export default cReducer