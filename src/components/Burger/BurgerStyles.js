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
        font-family:inherit;
        font-size: 1.5rem;
`;

const Message = styled.div`
          background-color: #FFC107;
          color: #ffffff;
`;

const Closed = styled.button`
            background: white;
            border: 0;
            color: #3f4042;
            cursor: pointer;
            font-family:inherit;
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
export { BurgerStyles, MessageStyle, Message, Closed };
