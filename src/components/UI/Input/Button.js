import React from 'react';

import ButtonStyle from './ButtonStyle';

const button = props => (
  <ButtonStyle
    disabled={props.disabled}
    onClick={props.clicked}
  >{props.children}</ButtonStyle>
);

export default button;
