import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Global } from '../styles';
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import Checkout from './Checkout/Checkout';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Global />
        <Layout>
          <Switch>
            <Route
              path='/checkout'
              component={Checkout}
            />
            <Route
              exact
              path='/'
              component={BurgerBuilder}
            />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
