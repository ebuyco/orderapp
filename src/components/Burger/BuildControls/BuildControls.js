import React from 'react';
import { BuildControlsStyles, OrderButton } from './BuildControls_Style';
import BuildControl from './BuildControl/BuildControl';
import { burgericon } from '../../../assets/svg';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Tomato', type: 'tomato' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = props => (
  <BuildControlsStyles>
    <p>Current Price: <em>$</em><strong>{props.price.toFixed(2)}</strong></p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <OrderButton
      disabled={!props.purchasable}
      onClick={props.ordered}
    ><img src={burgericon} />Order Now</OrderButton>
  </BuildControlsStyles>
);

export default BuildControls;
