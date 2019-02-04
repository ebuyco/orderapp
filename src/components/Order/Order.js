import React from 'react';
import OrderWrapper from './OrderStyle';

const Order = (props) => {
  const ingredients = [];

  for (const ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }
  const ingredientsOutput = ingredients.map(ig => (
    <span key={ig.name}>{ig.name} ({ig.amount})
    </span>
  ));
  return (
    <OrderWrapper>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </OrderWrapper>
  );
};


export default Order;
