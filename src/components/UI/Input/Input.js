import React from 'react';
import InputStyle from './InputStyle';

const Input = (props) => {
  let inputElement = null;

  switch (props.elementType) {
    case ('input'):
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case ('textarea'):
      inputElement = (
        <textarea
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case ('select'):
      inputElement = (
        <select
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option
              value={option.value}
            >
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  return (
    <InputStyle>
      <label>{props.label}</label>
      {inputElement}
    </InputStyle>
  );
};


export default Input;
