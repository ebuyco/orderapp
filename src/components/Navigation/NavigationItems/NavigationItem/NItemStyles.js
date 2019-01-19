import styled from 'styled-components';

const NItemStyles = styled.li`
        box-sizing: border-box;
        display: block;
        margin: 10px 0;
        width: 100%;
        a {
            box-sizing: border-box;
            display: block;
            text-decoration: none;
            width: 100%;
            &.active {
                background-color: #3751FE;
                border-bottom: 4px solid #FF7C01;
                color: #s;
           }
            &:hover{
                background-color: #5A6FFE;
                border-bottom: 4px solid #FF7C01;
                color: #ffffff;
            }
            &:active {
                background-color: #5A6FFE;
                border-bottom: 4px solid #40A4C8;
                color: #ffffff;
            }
            img {
                float: right;
                height: auto;
                width: 5%;
            }   
        }      
      
        @media (min-width: 500px ) {
            margin: 0;
            display: flex;
            height: 100%;
            width: auto;
            align-items: center;
            a {
                color: #525252;
                height: 100%;
                padding: 16px 10px;
                border-bottom: 4px solid transparent;
                &.active {
                    color: #ffffff;
                 
               }
                &:hover{
                    background-color: #5A6FFE;
                    border-bottom: 4px solid #FF7C01;
                    color: #ffffff;
                }
                &:active {
                    background-color: #5A6FFE;
                    border-bottom: 4px solid #40A4C8;
                    color: #ffffff;
                }
            }   
             
        }

  `;

const NItemActive = styled.a`
        .active{
            &:active {
                background-color: #3751FE;
                border-bottom: 4px solid #40A4C8;
                color: #ffffff;
            }
        }
   
`;
export { NItemActive, NItemStyles };
