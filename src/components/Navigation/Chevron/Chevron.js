import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import ChevronWrapper from './ChevronStyle';
import Body from './Body';

const Chevron = (props) => {
  let attachedClasses = [props.closed ? 'closed' : 'closed'];
  if (props.open) {
    attachedClasses = [props.open ? 'open' : 'open'];
  }
  return (
    <Aux>
      <Body
        show={props.open}
        clicked={props.closed}
      />
      <ChevronWrapper
        className={attachedClasses.join(' ')}
      >
        <p>Profile</p>
        <hr />
        <p>Logout</p>
      </ChevronWrapper>


    </Aux>
  );
};

export default Chevron;
