import styled from 'styled-components';


const BtnWrapper = styled.div`
        button {
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

        }
`;

const ButtonDanger = styled.button`
        background-color: #EF5350;
        :hover{
            background-color: #FF5722;
        }
`;

const ButtonSuccess = styled.button`
        background-color: #00C853;
        :hover{
            background-color: #43A047;
        }
`;

export { BtnWrapper, ButtonDanger, ButtonSuccess };
