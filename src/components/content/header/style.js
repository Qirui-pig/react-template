import styled from 'styled-components'

export const AppHeaderWrapper = styled.div`
  width:100%;
  height:64px;
  background-color:rgba(36,41,46,1);
  .header{
    .h-left{
      .logo{
        width:94px;
        height:64px;
        line-height:64px;
        svg{
          width:94px;
          margin-top:-44px;
        }
      }
      .title{
        color:#fff;
        height:64px;
        line-height:64px;
        font-size:22px;
        text-align:center;
      }
    }
    .h-right{
      .tab-bar{
        display:flex;
        align-items:center;
        cursor:pointer;
        .tab-item{
          position: relative;
          flex:1;
          align-items:center;
          color:#fff;
          height:64px;
          font-size:16px;
          line-height:64px;
          text-align:center;
          .line{
            position:absolute;
            width:0px;
            height:2px;
            border-radius:2px;
            left:50%;
            transform:translateX(-50%);
            bottom:15px;
            background-color: #fff;
            transition:width .5s;
          }
          &:hover{
            background-color: #363d45;
            .line{
              width:50px;
            }
          }
        }
        .active{
          background-color: #363d45;
        }
      }
      
    }
  }
  
`