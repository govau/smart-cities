import { combineReducers } from 'redux';

import { categoriesReducer } from './ducks/categories';
import { citiesReducer } from './ducks/cities';
import { indicatorsReducer } from './ducks/indicators';

const reducers = combineReducers({
  categories: categoriesReducer,
  cities: citiesReducer,
  indicators: indicatorsReducer,
});

export default reducers;
