import React from 'react';
import { ImgIcons, NItemsStyles, LabelBlack } from './NItemStyles';
import NavigationItem from './NavigationItem/NavigationItem';
import { DashboardIcon, Build, Cart } from '../../../../../assets/svg';

const NavigationItems = () => (
  <NItemsStyles>
    <NavigationItem link='/'><ImgIcons src={DashboardIcon} />Dashboard<LabelBlack>8</LabelBlack></NavigationItem>
    <NavigationItem link='/' active><ImgIcons src={Build} />Burger Builder</NavigationItem>
    <NavigationItem link='/'><ImgIcons src={Cart} />Checkout</NavigationItem>
  </NItemsStyles>

);

export default NavigationItems;
