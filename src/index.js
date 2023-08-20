import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { showCartSlice } from './Reduxtoolkit/CartSplice';
import { Provider } from 'react-redux';
import { addToCartSlice } from './Reduxtoolkit/ItemSlice';

  const store = configureStore({
    reducer:{toggler: showCartSlice.reducer,
    add: addToCartSlice.reducer}
  })



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App  />
    </Provider>
  </React.StrictMode>
);


