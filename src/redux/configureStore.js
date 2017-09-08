/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';

const win = typeof global === 'undefined' ? window : global;

const configureStore = (bootState) => {
  const middlewares = [
    thunkMiddleware,
  ];

  const composeEnhancers =
    __DEV__ && win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      win.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

  const enhancer = composeEnhancers(
    applyMiddleware(...middlewares),
    // other store enhancers if any
  );

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
