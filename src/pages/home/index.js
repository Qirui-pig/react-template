import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { HomePageWrapper } from './style.js'
import { getUserInfoAction } from './store/actionCreators'

export default memo(function HomePage () {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserInfoAction())
  }, [dispatch])

  return (
    <HomePageWrapper>
      
    </HomePageWrapper>
  )
})
