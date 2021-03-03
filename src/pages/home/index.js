import React, { memo, } from 'react'

import Img1 from '@/assets/image/1.jpg'
import Img2 from '@/assets/image/2.jpg'
import Img3 from '@/assets/image/3.jpg'
import Img4 from '@/assets/image/4.jpg'
import { HomePageWrapper } from './style.js'
import HSwiper from '../../components/common/swiper'


export default memo(function HomePage () {

const images = [Img1, Img2, Img3, Img4]

  return (
    <HomePageWrapper>
      <HSwiper images = {images}/>
    </HomePageWrapper>
  )
})
