import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import 'bootstrap';
import RootComponent from './components/root/RootComponent';
import configureStore from './store/configureStore';

// const appStore = configureStore({
//   counterReducer: 1000
// });
const appStore = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={appStore}>
    <RootComponent />
  </Provider>
  // </React.StrictMode>
);