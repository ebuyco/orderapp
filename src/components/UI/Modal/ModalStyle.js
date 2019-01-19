import styled from 'styled-components';

const ModalStyle = styled.div`
        position: fixed;
        z-index: 500;
        background-color: white;
        width: 70%;
        border: 1px solid #969c98;
        box-shadow: 1px 1px 1px #827c7c;
        padding: 2rem;
        left: 15%;
        top: 30%;
        box-sizing: border-box;
        -webkit-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
        @media (min-width: 600px) {
        .Modal {
            width: 500px;
            left: calc(50% - 250px);
        }
`;


export default ModalStyle;
