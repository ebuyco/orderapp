import React, { Component } from 'react';
import { Global } from '../styles';
import Layout from '../hoc/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Global />
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
