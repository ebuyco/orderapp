import styled from 'styled-components';

const ButtonStyle = styled.button`

            background-color: #00C853;
            border: none;
            border-radius: 8rem;
            color: white;
            cursor: pointer;
            font-family: Montserrat-SemiBold;
            font-size: 1.2rem;
            margin: 1rem;
            margin-left: 0;
            outline: none;
            padding: 1rem;
            width: 30%;
            &:hover {
              background-color: #43A047;
            }
            &[disabled] {
                background-color: #FF5722;
                border: 1px solid #FFA32A;
                color: #FFFFFF;
                cursor: not-allowed;
                &[not]{
                 animation: enable 0.3s linear;
                }

`;

export default ButtonStyle;
