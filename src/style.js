import styled from 'styled-components'

export const MainWrapper = styled.div`
  width:${props=>props.isOpen?'calc(100% - 256px)':'calc(100% - 80px)'};
  height:calc(100% - 64px);
  float:left;
  padding:20px;
`