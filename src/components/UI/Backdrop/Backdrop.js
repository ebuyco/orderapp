import React from 'react';
import BackdropStyles from './BackdropStyle';

const Backdrop = props => (
  props.show ? (
    <BackdropStyles
      onClick={props.clicked}
    />
  ) : null
);


export default Backdrop;
