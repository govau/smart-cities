import React from 'react';
import ReactDOM from 'react-dom';
import merge from 'lodash/merge';
import {Provider} from 'react-redux';

import config from './config';
import initialState from './redux/initialState';
import configureStore from './redux/configureStore';
import {checkStatus, parseBody} from './helpers/fetch';

import './style/helper.scss';

import AppRouter from './routes/components/AppLayout/AppLayout';

const SIGN_OUT_URL = '/users/sign_out';

const win = typeof global === 'undefined' ? window : global;

const urlSet = {
  assessmentCollections: `${config.apiBaseUrl}/assessment_collections.json`,
  portfolios: `${config.apiBaseUrl}/portfolios.json`,
  agencies: `${config.apiBaseUrl}/agencies.json`,
  businessCategories: `${config.apiBaseUrl}/business_categories.json`,
  projects: `${config.apiBaseUrl}/projects.json`,
  projectAssessments: `${config.apiBaseUrl}/project_assessments.json`,
  benefits: `${config.apiBaseUrl}/benefits.json`,
  benefitAssessments: `${config.apiBaseUrl}/benefit_assessments.json`,
  risks: `${config.apiBaseUrl}/risks.json`,
  riskAssessments: `${config.apiBaseUrl}/risk_assessments.json`,
};

const promises = Object.values(urlSet).map(url => fetch(url, {
    credentials: 'same-origin',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  })
  .then(checkStatus)
  .then(parseBody)
  .catch(e => {
    if (__DEV__) {
      console.error('error details:', e);
    // } else {
    //   win.alert('There was an issue loading some of the data and we are unable to load the app. Please try logging in again or contact the Dashboard Team at performance-dashboard@digital.gov.au');
    //   win.location = SIGN_OUT_URL;
    }
  })
);

Promise.all(promises).then(data => {
  const staticState = {};

  data.forEach((r, idx) => {
    const key = Object.keys(urlSet)[idx];
    staticState[key] = r;
  });

  staticState.config = config;

  const bootState = merge(
    initialState,
    win.__DASHBOARD_STATE__ || {},
    staticState,
  );

  const store = configureStore(bootState);

  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById('root')
  );

  // for Highcharts, we need to trigger a resize after the DOM is created
  // apparently this is a common problem:
  // https://stackoverflow.com/questions/1861109/forcing-windows-resize-to-fire
  window.dispatchEvent(new Event('resize'));

  return true;

}).catch(e => {
  // catches all application errors
  console.error('error details:', e);
});
