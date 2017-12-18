import { combineReducers } from 'redux';

import { categoriesReducer } from './ducks/categories';
import { citiesReducer } from './ducks/cities';
import { indicatorsReducer } from './ducks/indicators';
import { uiReducer } from './ducks/ui';

const reducers = combineReducers({
  categories: categoriesReducer,
  cities: citiesReducer,
  indicators: indicatorsReducer,
  ui: uiReducer,
});

export default reducers;
