import styled from 'styled-components'

export const SwiperWrapper = styled.div`
  .zoom-out {
    perspective: 1000px;
    height: 50vw;
  }

  @media (min-width: 768px) {
    .zoom-out {
      height: 300px;
    }
  }

  .zoom-out__slide {
    position: absolute;
  }

  .zoom-out__slide img {
    background-color: transparent;
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    -webkit-transform: translateY(-50%) translateX(-50%);
  }
  .fader {
  height: 50vw;
  position: relative;
  overflow: hidden;
}

@media (min-width: 768px) {
  .fader {
    height: 300px;
  }
}

.fader__slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
}

.fader img {
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  -webkit-transform: translateY(-50%) translateX(-50%);
}
`