import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Seeds1, Seeds2, BreadBottom, BreadTop, Meat, Salad, Cheese, Bacon }
  from './BurgerIngredientsStyle';
import { cheese, bunsUpper, bunsLower, pattyUpper, lettuceUpper, tomato, seeds1, seeds2 } from '../../../assets/svg';

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case ('bread-bottom'):
        ingredient = <BreadBottom src={bunsLower} />;
        break;
      case ('seed1'):
        ingredient = <Seeds1 src={seeds1} />;
        break;
      case ('seed2'):
        ingredient = <Seeds2 src={seeds2} />;
        break;
      case ('bread-top'):
        ingredient =
          <BreadTop src={bunsUpper} />;
        break;
      case ('meat'):
        ingredient = <Meat src={pattyUpper} />;
        break;
      case ('salad'):
        ingredient = <Salad src={lettuceUpper} />;
        break;
      case ('cheese'):
        ingredient = <Cheese src={cheese} />;
        break;
      case ('bacon'):
        ingredient = <Bacon src={tomato} />;
        break;
      default:
        ingredient = null;
    }
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};


export default BurgerIngredient;
