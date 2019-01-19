
import styled from 'styled-components';

const NItemsStyles = styled.ul`
        align-items: center;
        display: flex;
        flex-grow: row;     
        height: 100%;
        list-style: none;
        margin: 0;
        padding: 0;
      @media(min-width: 500px){
         flex-grow: column;     
      }  
`;


export default NItemsStyles;
