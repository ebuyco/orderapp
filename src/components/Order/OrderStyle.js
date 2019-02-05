import styled, { keyframes } from 'styled-components';


const OrderWrapper = styled.div`
      transition: ${frames}transform 300ms cubic-bezier(0.6, -0.28, 0.74, 0.05);
      background-color: #ffffff;
      box-sizing: border-box;
      margin: 5rem auto;
      padding: 2rem;
      width: 50%;
      box-shadow: -2px 2px 20px 0px #d2cfcf;
      img {
          margin: 0 auto;
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center
          height: auto;
          width: 25%;
          margin-top: -6rem;
          padding-bottom: 2rem;
          box-sizing: border-box;
      }

    label {
        background-color: #5A6FFE;
        border-radius: 8rem;
        color: #ffffff;
        font-size: 1.2rem
        margin-right: 0.8rem;
        padding: 0.7rem;
        cursor: pointer;
      &:hover {
          background-color : #009688;
      }
    }
    strong {
        color: #FF5722;
    }
`;

const frames = keyframes`
  0% {
    height: 200px;
  }
  30%, 100% {
    width: 400px;
  }
  100% {
    height: 600px;
    background: orange;
  }
`;

export default OrderWrapper;
