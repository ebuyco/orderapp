import React, { Component } from 'react';
import { CDWrapper, CDForm } from './CDStyle';
import axios from '../../../axios-order';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Ernie Buyco',
        address: {
          street: 'Teststreet 1',
          zipCode: '41351',
          country: 'Philippines'
        },
        email: 'test@gmail.com'
      },
      deliveryMethod: 'fastest'
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

  render() {
  /*eslint-disable*/
    let form = (
      <CDForm>
      <input
        type='text'
        name='name'
        placeholder='Your Name'
      />
      <input
        type='email'
        name='name'
        placeholder='Your Email Address'
      />
      <input
        type='text'
        name='street'
        placeholder='Street Address'
      />
      <input
        type='text'
        name='postal'
        placeholder='Postal Code'
      />
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
