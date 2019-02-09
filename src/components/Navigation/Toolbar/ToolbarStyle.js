import styled from 'styled-components';


const ToolbarStyle = styled.header`
    align-items: center;
    background-color: #FFFFFF;
    box-shadow: 0px -20px 20px 20px #d2cfcf;
    box-sizing: border-box;
    display: flex;
    font-family: inherit;
    height: 56px;
    justify-content: space-between;
    left: 0;
    padding: 0 20px;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 90;
    &:before {
        content: '';
        display: table;
    }
    &:after{
        content: '';
        display: table;
    }
`;


const NavStyle = styled.nav`
        height: 100%;
`;

export { NavStyle, ToolbarStyle };
