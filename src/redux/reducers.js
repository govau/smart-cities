import { combineReducers } from 'redux';

import { categoriesReducer } from './ducks/categories';
import { citiesReducer } from './ducks/cities';
import { indicesReducer } from './ducks/indices';

const reducers = combineReducers({
  categories: categoriesReducer,
  cities: citiesReducer,
  indices: indicesReducer,
});

export default reducers;
