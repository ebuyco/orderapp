import styled from 'styled-components';

const FooterStyle = styled.footer`
    box-sizing: border-box;
    color: #3D3D3D;
    display: flex;
    font-family: inherit;
    height: auto;
    left:0;
    position: relative;
    top: 0;
    width: 100%;
    z-index: 20;
    p {
        box-sizing: border-box;
        font-family: inherit;
        font-size: 2rem;
        margin: 0 auto;
    }

`;

const ImageWrapper = styled.img`
     align-items: center;
      box-sizing: border-box;
      display: flex;
      height: auto;
      justify-items: center;
      left:0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 10;
`;
const FooterLayout = styled.div`
      align-items: center;
      display: flex;
      display: grid;
      font-family: inherit;
      grid-auto-flow: column;
      grid-gap: 8px;
      grid-template-columns: 1fr 1fr;
      justify-content: center;
      margin: 0 auto;
      margin-top: 5rem;
      text-align: center;
      z-index: 200;
`;


const ContactContent = styled.div`
      margin: 0 auto;
      text-align: center;
`;


const SocialMedia = styled.div`
      box-sizing: border-box;
      margin: 0 auto;
      text-align: center;

`;

const List = styled.ul`
      margin: 0 auto;
`;

const ContentList = styled.li`
     box-sizing: border-box;
     display: inline-block;
     font-family: inherit;
      margin-right: 10px 2px;
      text-decoration: none;
      img {
         padding: 16px 10px;
         width: 7%;
       &:hover{
            color: red;
        }
      }
`;

export { FooterLayout, FooterStyle, ContactContent,
  ContentList, SocialMedia, List, ImageWrapper };
