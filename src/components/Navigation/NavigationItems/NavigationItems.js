import React from 'react';
import NItemsStyles from './NItemsStyles';
import NavigationItem from './NavigationItem/NavigationItem';
import { Chevron } from '../../../assets/svg';

const NavigationItems = () => (
  <NItemsStyles>
    {/* <NavigationItem link='/' active>Burger Builder</NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem> */}
    <NavigationItem link='/'>User Name</NavigationItem>
    <NavigationItem link='/'><img src={Chevron} alt='chevron_icon' /></NavigationItem>
  </NItemsStyles>

);

export default NavigationItems;
