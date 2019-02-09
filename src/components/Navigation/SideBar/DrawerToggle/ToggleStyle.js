import styled from 'styled-components';

const ToggleStyle = styled.div`
   align-items: flex-start;
   box-sizing: border-box;
   display: flex;
   font-family: inherit;
   justify-content: flex-start;
   left: 1rem;
   position: relative;
   top: -17px;
   img {
        cursor: pointer;
        display: flex;
        left: 0;
        min-width: 5rem;
        padding: 0.5rem;
        position: absolute;
        top: 0;
        width: 100%;
        &:hover {
            color: '#212348';
       }
    }
`;

export default ToggleStyle;
