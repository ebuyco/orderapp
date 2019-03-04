import styled from 'styled-components';

const CDWrapper = styled.div`
      margin: 20px auto;
      text-align: center;
      width: 100%;

`;

const ImgRegister = styled.div`
      align-items: flex-start;
      box-sizing: border-box;
      display: flex;
      justify-content: flex-start;

      img {
        height: auto;
        left:0;
        position: absolute;
        top:0;
        width:40%;
        z-index: -1;
      }
`;

const RegisterLower = styled.div`
      align-items: flex-end;
      box-sizing: border-box;
      display: flex;
      float:right;
      justify-content: flex-end;

      img {
        height: auto;
        position: absolute;
        right:0;
        top: auto;
        width:40%;
        z-index: -1;
      }
`;

const CDForm = styled.form`
        background: #ffffff;
        border: 5px solid white;
        box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
        font-size: 1.5rem;
        font-weight: 600;
        line-height: 1.5;
        margin: 0 auto;
        padding: 20px;
        width: 50%;
        z-index: 50;
         label {
          display: block;
          margin-bottom: 1rem;
        }
        textarea,
          select {
            border: 1px solid black;
            display: block;
            font-size: 1rem;
            padding: 0.5rem;
            width: 100%;
          }
          /* button{
            background-color: #00C853;
            border: none;
            border-radius: 8rem;
            color: white;
            cursor: pointer;
            font-family: Montserrat-SemiBold;
            font-size: 1.2rem;
            margin: 1rem;
            margin-left: 0;
            outline: none;
            padding: 1rem;
            width: 30%;
            &:hover {
              background-color: #43A047;
            } */
            /* &[disabled] {
                background-color: #FF5722;
                border: 1px solid #FFA32A;
                color: #FFFFFF;
                cursor: not-allowed;
                &[not]{
                 animation: enable 0.3s linear;
                }
              } */
          input {
            background: transparent;
            border: 0;
            border-bottom: 1px solid black;
            color: white;
            font-size: 2rem;
            font-weight: 600;
            padding: 0.5rem 1.2rem;
            width: 100%;
          }
            fieldset {
              border: 0;
              padding: 0;

              &[disabled] {
                opacity: 0.5;
              }
              &::before {
                background-image: linear-gradient(to right, #ff3019 0%, #e2b04a 50%, #ff3019 100%);
                content: '';
                display: block;
                height: 10px;
              }
            }
`;

export { CDWrapper, CDForm, ImgRegister, RegisterLower };
