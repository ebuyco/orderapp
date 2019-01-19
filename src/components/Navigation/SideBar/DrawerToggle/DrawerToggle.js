import React from 'react';
import ToggleStyle from './ToggleStyle';
import { Menu } from '../../../../assets/svg';

const DrawerToggle = props => (
  <ToggleStyle
    onClick={props.clicked}
  >
    <img src={Menu} alt='name_icon' />
  </ToggleStyle>
);

export default DrawerToggle;
