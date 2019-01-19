import styled from 'styled-components';

const ContentStyle = styled.main`
    //   margin-top: 8rem; 
    padding-top: 5rem;
    margin: 0 auto;
    display: inline-block;
    float: right;
    width: 100%;
      &:before {
        display: table;
        content: '';
        box-sizing: border-box;
      }
      &:after {
        display: table;
        content: '';
        box-sizing: border-box;
      }

      @media (min-width: 992px)
          width: 970px;
        }

        @media (min-width: 768px)
             width: 750px;
    
        `;

export default ContentStyle;
