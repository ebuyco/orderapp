import styled from 'styled-components';

const CDWrapper = styled.div`
      margin: 20px auto;
      text-align: center;
      width: 80%;

`;

const CDForm = styled.form`
  background: rgba(0, 0, 0, 0.02);
  border: 5px solid white;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.05);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
  padding: 20px;
  label {
    display: block;
    margin-bottom: 1rem;
  }
 textarea,
  select {
    display: block;
    border: 1px solid black;
    font-size: 1rem;
    padding: 0.5rem;
    width: 100%;
  }
  button{
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
    background-color: #00C853;
    &:hover {
      background-color: #43A047;
    }
  }
  input {
    background: transparent;
    border: 0;
    color: white;
    font-size: 2rem;
    font-weight: 600;
    padding: 0.5rem 1.2rem;
    width: 100%;
    border-bottom: 1px solid black;
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

export { CDWrapper, CDForm };
