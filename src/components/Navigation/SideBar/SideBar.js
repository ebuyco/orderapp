import React from 'react';
import { LogoIcon } from '../../../assets/svg';
import NavigationItems from './Navigation/NavigationItems/NavigationItems';
import { SidenavStyle, LogoSidebar, SbStyles } from './SbStyles';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const SideBars = (props) => {
  let attachedClasses = [props.Close ? 'Close' : 'Close'];
  if (props.open) {
    attachedClasses = [props.Open ? 'Open' : 'Open'];
  }
  return (
    <Aux>
      <Backdrop
        show={props.open}
        clicked={props.closed}
      />
      <SbStyles
        className={attachedClasses.join(' ')}
      >
        <LogoSidebar>
          <img src={LogoIcon} alt='logo_image' />
        </LogoSidebar>
        <SidenavStyle>
          <NavigationItems />
        </SidenavStyle>
      </SbStyles>
    </Aux>
  );
};

export default SideBars;
