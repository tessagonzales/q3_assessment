import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchBooks } from './redux/actions';

const storeInstance = store();

storeInstance.dispatch(fetchBooks());

ReactDOM.render(
  <Provider store={storeInstance} >
    <App />
  </Provider>, document.getElementById('root'));
