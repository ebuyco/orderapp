import React from 'react';
import { CHWrapper, CSStyle } from './CSStyle';
import Burger from '../../Burger/Burger';
import { BtnWrapper, ButtonDanger, ButtonSuccess } from '../../UI/Button/ButtonStyle';


const checkoutSummary = props => (
  <CHWrapper>
    <h1>We hope it taste well !!</h1>
    <CSStyle>
      <Burger
        ingredients={props.ingredients}
      />
    </CSStyle>
    <BtnWrapper>
      <ButtonDanger
        onClick={props.checkoutCancelled}
      >
       Cancel
      </ButtonDanger>
      <ButtonSuccess
        onClick={props.checkoutContinued}
      >
       Continue
      </ButtonSuccess>
    </BtnWrapper>
  </CHWrapper>
);

export default checkoutSummary;
