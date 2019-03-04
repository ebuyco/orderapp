import styled, { keyframes } from 'styled-components';

const ChevronWrapper = styled.div`
    align-items: center;
    background-color: #FFFFFF;
    border-radius: 1rem;
    box-shadow: 0px 1px 14px 0px #d2cfcf;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    float: right;
    font-size: 1.2rem;
    justify-content: center;
    margin-right: 15rem;
    margin-top: 5rem;
    padding: 2rem;
    text-align: center;
    width: 20%;
    z-index: 400;
    &:after{
      content: "";
      display: inline-block;
      position: absolute;
      border: 8px solid transparent;
      border-bottom-color: #fff;
      left: auto;
      right: auto;
      top: -14px;

    }
    hr {
        border: 1px solid #8e8989;
        width: 100%;
      }
    &.open {
    display: block;
    left: 70%;
    position: fixed;
    text-align: center;
    top: 0;
    transition: ${Animation} all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    pointer-events: all;
    -webkit-clip-path: circle(900px at 60% 275px);

      a {
        animation: fadeIn 0.6s ease 0.3s;
         animation-fill-mode: forwards;
      }

    }
   &.closed {
      display: none;
      transition: all 0.3s cubic-bezier(0.77, 0, 0.175, 1);
   }
`;

const Animation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(40px, 0, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
export default ChevronWrapper;
