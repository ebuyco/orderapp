import React from 'react';
import BodyStyle from './BodyStyle';


const Body = props => (
  props.show ? (
    <BodyStyle
      onClick={props.clicked}
    />
  ) : null
);


export default Body;
