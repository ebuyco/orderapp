import styled from 'styled-components';

const BurgerStyles = styled.div`
    width:100%;
    margin: 0 auto;
    height: 250px;
    overflow: scroll;
    font-family: 'Montserrat-Bold, sans-serif'
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    @media(min-width: 500px) and (min-height: 400px) {
        width: 350px;
        height: 300px;
    }
    @media(min-width: 500px) and (min-height: 401px) {
        width: 450px;
        height: 400px;
    }
    @media(min-width: 1000px) and (min-height: 700px) {
        width: 700px;
        height: 600px;
    }
`;

export default BurgerStyles;
