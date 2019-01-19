import React from 'react';
import LogoStyle from './LogoStyle';
import { LogoIcon } from '../../assets/svg';

const Logo = () => (
  <LogoStyle>
    <img src={LogoIcon} alt='logo_image' />
  </LogoStyle>
);

export default Logo;
