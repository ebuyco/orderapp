
import styled from 'styled-components';

const NItemsStyles = styled.ul`
        font-family:Montserrat-Medium;
        height: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
        width: 100%;
`;

const ImgIcons = styled.img`
        height: auto;
        margin: 0;
        padding-left: 2rem;
        padding-right: 1.5rem;
`;

const LabelBlack = styled.span`
        background-color: #464751;
        border-radius: 0.9rem;
        font-family: Montserrat-Regular;
        font-size: 1rem;
        margin-top: -33px;
        right: 2rem;
        text-align: center;
        width: 23%;
`;

const LabelYellow = styled.span`
        background-color: #FFC107;
        border-radius: 0.9rem;
        font-family: Montserrat-Regular;
        font-size: 1rem;
        margin-top: -33px;
        right: 2rem;
        text-align: center;
        width: 23%;
`;

export { ImgIcons, NItemsStyles, LabelBlack, LabelYellow };
