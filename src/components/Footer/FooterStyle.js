import styled from 'styled-components';

const FooterStyle = styled.footer`
    background-color: #F5F9FC;
    color: #3D3D3D;
    display: flex;
    font-family: Montserrat-Regular;
    height: auto;
    width: 100%;
    &:before {
        box-sizing: border-box;
        content: '';
        display: table;
    }
    &:after {
        box-sizing: border-box;
        content: '';
        display: table;
    }

    
`;

export default FooterStyle;
