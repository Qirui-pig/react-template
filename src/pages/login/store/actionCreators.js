import * as actionTypes from './constants'

export const changeUserInfoAction = (userInfo)=>({
  type: actionTypes.CHANGE_USER_INFO,
  userInfo
})

export const changeUserStatusAction = (userStatus)=>({
  type: actionTypes.CHANGE_USER_STATUS,
  userStatus
})
