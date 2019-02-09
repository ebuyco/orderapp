import React, { Component } from 'react';
import { CDWrapper, CDForm } from './CDStyle';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: ''
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: ''
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP CODE'
        },
        value: ''
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'email@addreesscom.'
        },
        value: ''
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {
              value: 'fastest',
              displayValue: 'Fastest'
            },
            {
              value: 'cheapest',
              displayValue: 'Cheapest'
            }
          ]
        },
        value: ''
      }
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price

    };
    /*eslint-disable*/
    axios.post('/orders.json', order)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push('/');
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
      /*eslint-disable*/
  }

    inputChangedHandler = (event) => {
        console.log(event.target.value);
    }
  render() {
  /*eslint-disable*/
    const formElementsArray = [];
    for ( let key in this.state.orderForm){
        formElementsArray.push({
            id:key,
            config: this.state.orderForm[key]
        });
    }
    let form = (
      <CDForm>
      {formElementsArray.map(formElement => (
          <Input
          key={formElement.config.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={this.inputChangedHandler}
          />
      ))}
      <button
        type='submit'
        onClick={this.orderHandler}
      >Order</button>
    </CDForm>
    );
      if (this.state.loading){
        form = <Spinner/>
      }
     /*eslint-disable*/
    return (
      <CDWrapper>
        <h4>Enter your Contact Data</h4>
          {form}
      </CDWrapper>
    );
  }
}

export default ContactData;
