import React from 'react';
import { NItemActive, NItemStyles } from './NItemStyles';

const NavigationItem = props => (
  <NItemStyles>
    <NItemActive
      href={props.link}
      className={props.active ? 'active' : null}
    >
      {props.children}</NItemActive>
  </NItemStyles>
);

export default NavigationItem;
