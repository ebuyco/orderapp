import styled, { keyframes } from 'styled-components';

const BuildControlsStyles = styled.div`
        align-items: center;
        background-color: #EFF3FC;
        box-shadow: 0 2px 1px #ccc;
        flex-flow: column;
        margin: 0 auto;
        padding: 10px 0;
        text-align: center;
        width: 100%;
        & > p {
           color: #3751FE;
           font-family: inherit;
           text-align: center;
           em {
                   font-family: inherit;
                   font-style: inherit;
                   padding:0.5rem;
           }
           strong {
                font-family: inherit;
                margin: 2px;
           }
        }
`;

const OrderButton = styled.button`
        align-items: center;
        animation: ${Animation} enable 0.3s linear;
        background-color: #43A047;
        border: 1px solid #098B25;
        border-radius: 0.8rem;
        box-shadow: 0px 1px 3px 0px #6c6f6c;
        color: #ffffff;
        cursor: pointer;
        display: flex;
        font: inherit;
        font-family: inherit;
        justify-content: center;
        margin: 0 auto;
        outline: none;
        padding: 0.5rem;
        text-align: center;
        text-transform: uppercase;
        width: 40%;
        &:hover {
                background-color: #00796B;
                border: 1px solid #71BF72;
                color: #ffffff;
        }
        &:active {
                background-color: #00796B;
                border: 1px solid #71BF72;
                color: #ffffff;
        }

        &[disabled] {
                background-color: #FF5722;
                border: 1px solid #FFA32A;
                color: #FFFFFF;
                cursor: not-allowed;
                &[not]{
                 animation: enable 0.3s linear;
                }
              }
        img {
                float: left;
                height: auto;
                padding-right: 1rem;
                width: 8%;
        }
`;

const Animation = keyframes`
       from {
        0% {
                transform: scale(1);
            }
            60% {
                transform: scale(1.1);
            }
       }

       to {
        100% {
                transform: scale(1);
            }
       }


`;


export { OrderButton, BuildControlsStyles };
