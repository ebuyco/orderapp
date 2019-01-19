import styled from 'styled-components';

const NItemStyles = styled.li`
        box-sizing: border-box;
        font-family:Montserrat-Medium;
        height: 100%;
        margin: 0;
        width: 100%;
        a {
            align-items: center;
            border-left: 4px solid transparent;
            box-sizing: border-box;
            color: white;
            display: flex;
            display-flow: column;
            height: 100%;
            justify-content: flex-start;
            margin: 0 auto;
            padding: 16px 10px;
            text-decoration: none;
  
            &.active {
                background-color: #3751FE;
                border-left: 0.2rem solid #FFFFFF;
                color: #ffffff;
           }
            &:hover{
                background-color: #5A6FFE;
                color: #ffffff;
            }
            &:active {
                background-color: #5A6FFE;
                border-left: 0.2rem solid #FFFFFF;
                color: #ffffff;
            }
           
        }      
      

  `;

const NItemActive = styled.a`
        .active{
            &:active {
                background-color: #3751FE;
                border-left: 4px solid #40A4C8;
                color: #ffffff;
            }
        }
   
`;
export { NItemActive, NItemStyles };
