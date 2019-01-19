import styled from 'styled-components';

const OrderSummaryStyle = styled.div`
        font-family: Montserrat-Medium;
        font-size: 1.3rem;
        img {
            align-items: flex-end;
            display:flex;
            float:right;
            justify-content: flex-end;
            margin: 0 auto;
            width: 55%;
        }
       span {
            text-transform: uppercase;
        } 
        hr {
            border: 0.1rem solid #e8e8e8;
            color: #eff3fc;
        }
        ul {
            font-size: 1.5rem;
            list-style: none;
            margin: 0;
            padding: 0;
        li {
                strong {
                    color: #3852FE;
                    font-family:Montserrat-SemiBold;
                    margin-left: 0.5rem;
                    text-align:center;
         
                  }
            }
        }
`;

const CloseButton = styled.button`
            background: white;
            border: 0;
            color: #3f4042;
            cursor: pointer;
            font-family:Montserrat-ExtraBold;
            font-size: 1.3rem;
            font-size: 3rem;
            position: absolute;
            right: 0;
            top: 1rem;
            z-index: 2;
            &:hover{
                color: #252424;
            }
            &:focus {
                outline: none;
            }
`;

const OrderColumns = styled.div`
        display: grid;
        grid-auto-flow: column;
        grid-gap: 8px;
        grid-template-columns: 1fr 1fr;
`;

const OrderSummaryIng = styled.div`
       float: left;
`;
export { CloseButton, OrderSummaryStyle, OrderColumns, OrderSummaryIng };
