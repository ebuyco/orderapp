import React from 'react';
import { Link } from 'react-router-dom';
import { NavStyle, ToolbarStyle } from './ToolbarStyle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideBar/DrawerToggle/DrawerToggle';

const Toolbar = props => (
  <ToolbarStyle>
    <DrawerToggle
      clicked={props.drawerToggleClicked}
    />
    <Link
      to='/'
      exact
    >
      <Logo />
    </Link>

    <NavStyle>
      <NavigationItems />
    </NavStyle>
  </ToolbarStyle>
);

export default Toolbar;
