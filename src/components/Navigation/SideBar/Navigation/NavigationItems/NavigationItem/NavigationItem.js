import React from 'react';
import { NavLink } from 'react-router-dom';
import { NItemStyles } from './NItemStyles';

const NavigationItem = props => (
  <NItemStyles>
    {/* <NItemActive
      href={props.link}
      className={props.active ? 'active' : null}
    >
      {props.children}</NItemActive> */}
    <NavLink
      to={props.link}
      exact={props.exact}
      // activeClassName='active'
    >
      {props.children}
    </NavLink>
  </NItemStyles>
);

export default NavigationItem;
