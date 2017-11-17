import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';
import { checkStatus, parseBody } from './helpers/fetch';

import {
  DATA_URL,
  INDICATORS,
  CATEGORIES,
} from './constants';

import App from './components/App/App';

fetch(DATA_URL)
  .then(checkStatus)
  .then(parseBody)
  .then((cities) => {
    const store = configureStore({
      cities,
      indicators: INDICATORS,
      categories: CATEGORIES,
    });

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root'),
    );
  })
  .catch((err) => {
    console.error(err);
  });

// we want to apply some special CSS only for users who are
// using the keyboard to navigate (e.g. focus state for custom check boxes)
// so we add a class to the body
function handleFirstTab(e) {
  if (e.keyCode === 9) { // the tab key
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
}

window.addEventListener('keydown', handleFirstTab);
