import React from 'react';
import BurgerStyles from './BurgerStyles';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';

const Burger = () => (
  <BurgerStyles>
    <BurgerIngredients type='seed1' />
    <BurgerIngredients type='seed2' />
    <BurgerIngredients type='bread-top' />
    <BurgerIngredients type='salad' />
    <BurgerIngredients type='cheese' />
    <BurgerIngredients type='meat' />
    <BurgerIngredients type='salad' />
    <BurgerIngredients type='bacon' />
    <BurgerIngredients type='bread-bottom' />
  </BurgerStyles>
);

export default Burger;
