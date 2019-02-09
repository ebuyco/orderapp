import React from 'react';
import { NItemsStyles } from './NItemsStyles';
import NavigationItem from './NavigationItem/NavigationItem';
import { Chevron, Notification } from '../../../assets/svg';

const NavigationItems = props => (
  <NItemsStyles>
    {/* <NavigationItem link='/' active>Burger Builder</NavigationItem>
    <NavigationItem link='/'>Checkout</NavigationItem> */}
    <NavigationItem>
      <img
        style={{ width: '10%' }}
        src={Notification}
        alt='bell'
      /></NavigationItem>
    <NavigationItem>User Name</NavigationItem>
    <NavigationItem>
      <img
        src={Chevron}
        alt='chevron_icon'
        onClick={props.clicked}
      />
    </NavigationItem>
  </NItemsStyles>

);

export default NavigationItems;
