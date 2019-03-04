import React from 'react';
import InputStyle from './InputStyle';
import classes from './Input.css';

const Input = (props) => {
  let inputElement = null;

  const inputClasses = [classes.InputElement];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
  }


  switch (props.elementType) {
    case ('input'):
      inputElement = (
        <input
          className={inputClasses.join(' ')}
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
              key={option.value}
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
          className={inputClasses}
          {...props.elementConfig}
          value={props.value}
        />
      );
  }
  /*eslint-disable*/
  let validationError = null;
  if(props.invalid && props.touched){
    validationError= <p>Please enter a valid {props.valueType}</p>;
  } return (
    <InputStyle>
      {validationError}
     <label>{props.label}</label>
      {inputElement}
    </InputStyle>
  );
};


export default Input;
