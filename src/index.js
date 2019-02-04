import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './containers/App';

const app = (
  <BrowserRouter basename='order-app/'>
    <App />
  </BrowserRouter>
);
ReactDOM.render(app, document.getElementById('root'));
