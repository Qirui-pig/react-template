import styled from 'styled-components'


export const HMenuWrapper = styled.div`
  width: ${props=>props.isOpen?'250px':'80px'};
  float: left;
  .ant-menu{
    height: calc(100vh - 64px);
    background-color: rgba(36,41,46,1);
  }
  .ant-btn{
    position: absolute;
    margin-top: -42px;
    margin-left: 20px;
  }
`