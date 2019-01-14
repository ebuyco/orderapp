import React from 'react';
import { BurgerStyles, MessageStyle } from './BurgerStyles';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => [...Array(props.ingredients[igKey])].map((_, i) => (
      <BurgerIngredients
        key={igKey + i}
        type={igKey}
      />
    )))
    .reduce((arr, el) => arr.concat(el), []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <MessageStyle>Please start adding an Ingredients</MessageStyle>;
  }
  return (
    <BurgerStyles>
      <BurgerIngredients type='bread-top' />
      {transformedIngredients}
      <BurgerIngredients type='bread-bottom' />
    </BurgerStyles>
  );
};

export default Burger;
