/* eslint-disable no-underscore-dangle */

import { createStore, compose } from 'redux';

import rootReducer from './reducers';

const configureStore = (bootState) => {
  const composeEnhancers = __DEV__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

  const enhancer = composeEnhancers();

  const store = createStore(
    rootReducer, // reducer
    bootState, // preloaded state
    enhancer,
  );

  // make reducers HMRable
  if (module && module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
