import { combineReducers } from 'redux';

import { configReducer } from './ducks/config';
import { uiReducer } from './ducks/ui';
import { sessionReducer } from './ducks/session';
import { citiesReducer } from './ducks/cities';
import { categoriesReducer } from './ducks/categories';

const reducers = combineReducers({
  config: configReducer,
  ui: uiReducer,
  session: sessionReducer,

  cities: citiesReducer,
  categories: categoriesReducer,
});

export default reducers;
