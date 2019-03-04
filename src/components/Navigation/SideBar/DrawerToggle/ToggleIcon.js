import React from 'react';
import { Menuburger } from '../../../../assets/svg';


const ToggleIcon = (props) => {
  let attachedClasses = [props.Close ? 'Close' : 'Close'];
  if (props.open) {
    attachedClasses = [props.Open ? 'Open' : 'Open'];
  }
  console.log(attachedClasses);
  return (
    <img
      src={Menuburger}
      alt='name_icon'
      className={attachedClasses.join(' ')}
      onClick={props.toggleHandler}
    />
  );
};

export default ToggleIcon;
