import styled, { keyframes } from 'styled-components';

const BunsUpper = styled.img`
       align-items: center;
       display: flex;
       height: auto;
       justify-content: center;
       margin: 0 auto;
       text-align: center;
      width: 25%;
      &.glow {
        animation: ${glow} 0.5s ease-in-out infinite alternate;
      }

`;

const BunsLower = styled.img`
       align-items: center;
       display: flex;
       height: auto;
       justify-content: center;
       margin: 0 auto;
       text-align: center;
      width: 25%;

`;

const Cheese = styled.img`
       align-items: center;
       display: flex;
       height: auto;
       justify-content: center;
       margin: 0 auto;
       text-align: center;
      width: 31%;

`;

const Meat = styled.img`
       align-items: center;
       display: flex;
       height: auto;
       justify-content: center;
       margin: 0 auto;
       text-align: center;
      width: 31%;

`;

const Salad = styled.img`
       align-items: center;
       display: flex;
       height: auto;
       justify-content: center;
       margin: 0 auto;
       text-align: center;
      width: 31%;

`;

const Tomato = styled.img`
       align-items: center;
       display: flex;
       height: auto;
       justify-content: center;
       margin: 0 auto;
       text-align: center;
      width: 33%;

`;


const Seeds1 = styled.img`
        align-items: center;
        clear: both;
        display: flex;
        justify-content: center;
        left: 45%;
        margin: 0 auto;
        position: absolute;
        text-align: center;
        width: 12%;
        
`;

const Seeds2 = styled.img`
        align-items: center;
        clear: both;
        display: flex;
        height: auto;
        justify-content: center;
        left: 43%;
        margin: 0 auto;
        position: absolute;
        text-align: center;
        width: 12%;

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
