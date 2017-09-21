import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './redux/configureStore';
import { checkStatus, parseBody } from './helpers/fetch';

import { DATA_URL } from './constants';

import App from './components/App/App';

fetch(DATA_URL)
  .then(checkStatus)
  .then(parseBody)
  .then((data) => {
    const store = configureStore(data.data);

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root'),
    );

    // for Highcharts, we need to trigger a resize after the DOM is created
    // apparently this is a common problem:
    // https://stackoverflow.com/questions/1861109/forcing-windows-resize-to-fire
    window.dispatchEvent(new Event('resize'));
  })
  .catch((err) => {
    console.error(err);
  });
