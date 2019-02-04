import React from 'react';
import { ImgIcons, NItemsStyles } from './NItemStyles';
import NavigationItem from './NavigationItem/NavigationItem';
import { Build, Cart } from '../../../../../assets/svg';

const NavigationItems = () => (
  <NItemsStyles>
    {/* <NavigationItem link='/'>
  <ImgIcons src={DashboardIcon} />Dashboard<LabelBlack>8</LabelBlack></NavigationItem> */}
    <NavigationItem link='/' exact><ImgIcons src={Build} />Burger Builder</NavigationItem>
    <NavigationItem link='/orders'><ImgIcons src={Cart} />Orders</NavigationItem>
  </NItemsStyles>

);

export default NavigationItems;
