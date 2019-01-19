import React from 'react';
import { BCStyle, BuildControlBtnMore, BuildControlBtnLess } from './BuildControlStyle';


const BuildControl = props => (
  <BCStyle>
    <label>{props.label}</label>
    <BuildControlBtnLess
      onClick={props.removed}
      disabled={props.disabled}
    >Less</BuildControlBtnLess>
    <BuildControlBtnMore
      onClick={props.added}
    >More</BuildControlBtnMore>
  </BCStyle>
);

export default BuildControl;
