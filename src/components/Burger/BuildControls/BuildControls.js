import React from 'react';
import BuildControlStyle from './BuildControls_Style';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Tomato', type: 'tomato' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' }
];

const BuildControls = props => (
  <BuildControlStyle>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.key}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
      />
    ))}
  </BuildControlStyle>


);

export default BuildControls;
