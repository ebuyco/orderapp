import React from 'react';
import ToggleStyle from './ToggleStyle';
import { Menuburger } from '../../../../assets/svg';

const DrawerToggle = props => (
  <ToggleStyle
    onClick={props.clicked}
  >
    <img src={Menuburger} alt='name_icon' />
  </ToggleStyle>
);

export default DrawerToggle;
