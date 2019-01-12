import styled, { keyframes } from 'styled-components';

const BunsUpper = styled.img`
       display: flex;
       justify-content: center;
       align-items: center;
       margin: 0 auto;
       text-align: center;
       width: 25%;
      height: auto;
      &.glow {
        animation: ${glow} 0.5s ease-in-out infinite alternate;
      }

`;

const BunsLower = styled.img`
       display: flex;
       justify-content: center;
       align-items: center;
       margin: 0 auto;
       text-align: center;
       width: 25%;
      height: auto;

`;

const Cheese = styled.img`
       display: flex;
       justify-content: center;
       align-items: center;
       margin: 0 auto;
       text-align: center;
       width: 31%;
      height: auto;

`;

const Meat = styled.img`
       display: flex;
       justify-content: center;
       align-items: center;
       margin: 0 auto;
       text-align: center;
       width: 31%;
      height: auto;

`;

const Salad = styled.img`
       display: flex;
       justify-content: center;
       align-items: center;
       margin: 0 auto;
       text-align: center;
       width: 31%;
      height: auto;

`;

const Tomato = styled.img`
       display: flex;
       justify-content: center;
       align-items: center;
       margin: 0 auto;
       text-align: center;
       width: 33%;
      height: auto;

`;


const Seeds1 = styled.img`
        position: absolute;
        clear: both;
        left: 45%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 12%;
        
`;

const Seeds2 = styled.img`
        position: absolute;
        clear: both;
        left: 43%;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 12%;
        height: auto;

`;

const glow = keyframes`
  from {
    box-shadow: 0 0 0px yellow;
  }

  to {
    box-shadow: 0 0 10px 1px yellow;
  }
`;

export { BunsUpper, BunsLower, Cheese, Meat, Seeds1, Seeds2, Salad, Tomato };
