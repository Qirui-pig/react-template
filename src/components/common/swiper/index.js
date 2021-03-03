import React, { memo, useState } from 'react'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

// https://keen-slider.io/examples/

import { SwiperWrapper } from './style'

export default memo(function HSwiper (props) {
  const { images, isFade } = props

  const [details, setDetails] = useState(null)
  const [opacities, setOpacities] = useState([])

  const option1 = {
    loop: true,
    slides: images.length,
    move (s) {
      setDetails(s.details())
    },
    initial: 2,
  }

  const option2 = {
    slides: images.length,
    loop: true,
    duration: 3000,
    move (s) {
      const new_opacities = s.details().positions.map((slide) => slide.portion)
      setOpacities(new_opacities)
    },
  }

  const [sliderRef] = useKeenSlider(isFade?option2:option1)

  function positionStyle (idx) {
    if (!details) return {}
    const position = details.positions[idx]
    const x = details.widthOrHeight * position.distance
    const scale_size = 0.7
    const scale = 1 - (scale_size - scale_size * position.portion)
    return {
      transform: `translate3d(${x}px, 0px, 0px) scale(${scale})`,
      WebkitTransform: `translate3d(${x}px, 0px, 0px) scale(${scale})`,
    }
  }

  return (
    <SwiperWrapper>
      {
        isFade ? <div ref={sliderRef} className="fader">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="fader__slide"
              style={{ opacity: opacities[idx] }}
            >
              <img src={src} />
            </div>
          ))}
        </div> : <div ref={sliderRef} className="keen-slider zoom-out">
            {images.map((src, idx) => (
              <div
                key={idx}
                style={positionStyle(idx)}
                className="keen-slider__slide zoom-out__slide"
              >
                <img className="image" src={src} />
              </div>
            ))}
          </div>
      }


    </SwiperWrapper>
  )
})