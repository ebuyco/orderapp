import styled from 'styled-components';

const BurgerStyles = styled.div`
    width:100%;
    margin: 0 auto;
    height: auto
    overflow: scroll;
    font-family: 'Montserrat-Bold';
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    background-color: #FDFEFE;
    box-shadow: -6px 6px 20px 0px #ccc;
    padding-top: 3rem;
    padding-bottom: 3rem
    @media(min-width: 500px) and (min-height: 400px) {
        width: 100%;
    }
    @media(min-width: 500px) and (min-height: 401px) {
        width: 100%;
    }
    @media(min-width: 1000px) and (min-height: 700px) {
        width: 100%;
    }
`;

const MessageStyle = styled.p`
        font-family: 'Montserrat-Medium';
        font-size: 1.5rem;
`;

export { BurgerStyles, MessageStyle };
