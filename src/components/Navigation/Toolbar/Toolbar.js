import React from 'react';
import { NavStyle, ToolbarStyle } from './ToolbarStyle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideBar/DrawerToggle/DrawerToggle';

const Toolbar = props => (
  <ToolbarStyle>
    <DrawerToggle
      clicked={props.drawerToggleClicked}
    />
    <Logo />
    <NavStyle>
      <NavigationItems />
    </NavStyle>
  </ToolbarStyle>
);

export default Toolbar;
