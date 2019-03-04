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
        background-color: DodgerBlue;
        border: none;
        border-bottom: 1px solid #000;
        font-size: 2rem;
        padding: 0.5rem;
        position: relative;
        width: 100%;
        &:focus {
          border-color:  #FF0000,
          outline: 0;
        }
       &:select {
          display: none;
      }
        &:active {
          background-color: var(--accentFg);
          background-image: linear-gradient(var(--accentFg), var(--accentFg)),
          linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%),
          linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%),
          linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);
          border-color: var(--accentFg);
          color: var(--accentBg);
        }
        &:hover {
          background-image: linear-gradient(var(--accentFg), var(--accentFg)),
          linear-gradient(-135deg, transparent 50%, var(--accentFg) 50%),
          linear-gradient(-225deg, transparent 50%, var(--accentFg) 50%),
          linear-gradient(var(--accentFg) 42%, var(--accentBg) 42%);
        }
        &:after{
          border: 6px solid transparent;
          border-color: #fff transparent transparent transparent;
          content: "";
          height: 0;
          left: 100px;
          position: absolute;
          right: 10px;
          top: 14px;
          width: 0;
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
    p{
      color: red;
      font-size: 1.5rem;
      margin: 5px 0;
    }
    &.InputElement {
    background-color: white;
    border: 1px solid #ccc;
    box-sizing: border-box;
    display: block;
    font: inherit;
    outline: none;
    padding: 6px 10px;
    width: 100%;

    &:focus {
    outline: none;
    background-color: #ccc;
      }

    }

    &.Invalid {
    border: 1px solid red;
    background-color: #FDA49A;
    }

`;


export default InputStyle;
