import styled from 'styled-components';

const BCStyle = styled.div`
      align-items: center;
      display: flex;
      justify-content: center;
      margin: 5px 0;  
      button {
        background-color: #3751FE;
        color: white;
      }
    label {
        font-family: Montserrat-SemiBold;
        padding: 10px;
        width: 12rem;
    }

`;

const BuildControlBtnLess = styled.button`
    border: 1px solid #5A6FFE;
    border-radius: 0.6rem;
    cursor: pointer;
    font: inherit;
    margin: 0 1rem;
    outline: none;
    padding: 0.2rem;
    width: 12%;
    &:before {
        content: '-';
        font-size: 1.5rem;
        padding: 0.5rem;
        width: 20%;
    }
    &:hover {
        background-color: #3852FE;
        color: #ccc;
        cursor: pointer;
   }
     &[disabled] {
        background-color: #FF5722;
        border: 1px solid #FFA32A;
        color: #ccc;
        cursor: default;
        }
     &:active {
        background-color: #FF7C01;
        color: white;
     }   
   
`;

const BuildControlBtnMore = styled.button`
    border: 1px solid #5A6FFE;
    border-radius: 0.6rem;
    cursor: pointer;
    font: inherit;
    margin: 0 1rem;
    outline: none;
    padding: 0.2rem;
    width: 12%;
    &:before {
        content: '+';
        font-size: 1.5rem;
        padding: 0.5rem;
        width: 20%;
     }
    &:hover {
        background-color: #3852FE;
        color: #ccc;
        cursor: pointer;
   }
     &[disabled] {
        background-color: #AC9980;
        border: 1px solid #7E7365;
        color: #ccc;
        cursor: default;
        }
     &:active {
        background-color: #3852FE;
        color: white;
     }   
   
`;

export { BCStyle, BuildControlBtnLess, BuildControlBtnMore };
