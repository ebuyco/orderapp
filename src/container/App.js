import React, { Component } from 'react';
import { Global } from '../styles';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Global />
        <h1>Test Component</h1>
      </div>
    );
  }
}

export default App;
