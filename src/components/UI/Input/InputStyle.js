import styled from 'styled-components';


const InputStyle = styled.div`
      box-sizing: border-box;
      padding: 10px;
      width: 100%;
      label {
            display: block;
            font-weight: bold;
            margin-bottom: 8px;
      }
      select {
        position: relative;
        background-color: DodgerBlue;
        border-bottom: 1px solid #000;
        border: none;
        width: 100%;
        padding: 0.5rem;
        font-size: 1rem;
        &:focus {
          outline: 0;
          border-color:  #FF0000,
        }
       &:select {
          display: none;
      }
        &:active {
          background-image: linear-gradient(var(--accentFg), var(--accentFg)),
          linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%),
          linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%),
          linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);
          color: var(--accentBg);
          border-color: var(--accentFg);
          background-color: var(--accentFg);
        }
        &:hover {
          background-image: linear-gradient(var(--accentFg), var(--accentFg)),
          linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%),
          linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%),
          linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);
        }
        &:after{
          position: absolute;
          left: 100px;
          content: "";
          top: 14px;
          right: 10px;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          border-color: #fff transparent transparent transparent;
        }
      }
    input {
        background-color: #ffffff;
        border: 1px solid #ccc;
        box-sizing: border-box;
        display: block;
        font: inherit;
        outline: none;
        padding: 6px 10px;
        width: 100%;
      &:focus{
          background-color: #cccccc;
          outline: none;
      }
    }

`;


export default InputStyle;
