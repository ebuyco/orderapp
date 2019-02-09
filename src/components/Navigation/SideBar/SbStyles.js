import styled from 'styled-components';


const SbStyles = styled.aside`
    background-color: #5A6FFE;
    box-sizing: border-box;
    font-family: inherit;
    height: 100%;
    left: 0;
    max-width: 100%;
    padding: 2rem 0;
    position: fixed;
    top: 0;
    transition: transform 0.3s ease-out;
    width: 250px;
    z-index: 200;
    &.Open {
        transform: translateX(0);
    }

    &.Close{
        display:none;
        transform: translateX(-100%);
    }
`;


const LogoSidebar = styled.div`
        box-sizing: border-box;
        font-family: inherit;
        height: auto;
        padding: 1rem;
        img{
            align-items: center;
            display: flex;
            height: 11%;
            justify-content: center;
            margin: 0 auto;
            margin-bottom: 32px;
            text-align:center;
            width: 40%;

        }
`;

const SidenavStyle = styled.nav`
        height: auto;
`;

export { SidenavStyle, LogoSidebar, SbStyles };
