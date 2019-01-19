import React, { Component } from 'react';
import { OrderSummaryStyle, CloseButton, OrderColumns, OrderSummaryIng } from './OrderSummaryStyles';
import Aux from '../../../hoc/Aux/Aux';
import { DeliveryBoy } from '../../../assets/svg';
import { BtnWrapper, ButtonDanger, ButtonSuccess } from '../../UI/Button/ButtonStyle';

class OrderSummary extends Component {
  // THis could be a functional component, doesn't have to be a class
  // componentWillUpdate() {
  //   console.log('[OrderSummary] WillUpdate');
  // }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => (
        <li
          key={igKey}
        >
          <span>{igKey}</span>:
          <strong>{this.props.ingredients[igKey]}</strong>
        </li>
      ));

    return (
      <Aux>
        <OrderSummaryStyle>
          <CloseButton
            title='close'
            show={this.props.show}
            onClick={this.props.modalClosed}
          >
                &times;
          </CloseButton>
          <h3>Your Order</h3>
          <hr />
          <p>A delicious Burger with the following ingredients: </p>
          <OrderColumns>
            <OrderSummaryIng>
              <ul>
                {ingredientSummary}
              </ul>
              <p>Your Bill : <span>$</span><strong>{this.props.price.toFixed(2)}</strong></p>
              <p>Continue to Checkout ?</p>
              <BtnWrapper>
                <ButtonDanger
                  onClick={this.props.purchaseCancelled}
                >
                    Cancel
                </ButtonDanger>
                <ButtonSuccess
                  onClick={this.props.purchaseContinued}
                >
                    Success
                </ButtonSuccess>
              </BtnWrapper>
            </OrderSummaryIng>
            <img src={DeliveryBoy} alt='test_image' />
          </OrderColumns>
        </OrderSummaryStyle>
      </Aux>
    );
  }
}


export default OrderSummary;
