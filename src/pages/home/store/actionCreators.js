import * as actionTypes from './constants'
import request from '@/api'

export const changeUserInfoAction = (userInfo)=>({
  type:actionTypes.CHANAGE_USER_INFO,
  userInfo
})

export const getUserInfoAction = ()=>{
  return dispatch=>{
    request({url:'/playlist/detail?id=19723756'}).then(res=>{
      dispatch(changeUserInfoAction(res.data.playlist))
    })
  }
}