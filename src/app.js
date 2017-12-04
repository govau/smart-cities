import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import configureStore from './redux/configureStore';
import { parseCityData } from './redux/ducks/cities';
import { checkStatus, parseBody } from './helpers/fetch';
import * as analyticsManager from './helpers/analyticsManager';
import {
  DATA_URL,
  INDICATORS,
  CATEGORIES,
} from './constants';

fetch(DATA_URL, { credentials: 'include' })
  .then(checkStatus)
  .then(parseBody)
  .then((cities) => {
    const store = configureStore({
      cities: parseCityData(cities),
      indicators: INDICATORS,
      categories: CATEGORIES,
    });

    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root'),
    );

    // currently [Dec 2017] we use client-side rendering, so FMP and TTI are the same
    // If/when we serve generated HTML from the server, FMP should be logged from index.html
    const timeSincePageLoad = Math.round(performance.now());
    analyticsManager.logFirstMeaningfulPaint(timeSincePageLoad);
    analyticsManager.logTimeToInteractive(timeSincePageLoad);
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
