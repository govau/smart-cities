import initialState from './../initialState';
import { CITIES } from '../../constants';

export const parseCityData = (cities) => {
  const citiesWithDetails = cities.map((rawCity) => {
    const city = CITIES[rawCity.source];

    if (!city) {
      console.warn(`${rawCity.source} is not a recognized city.`);
      return null;
    }

    return {
      ...city,
      indicators: rawCity.indicators,
    };
  }).filter(city => city);

  citiesWithDetails.sort((a, b) => a.name.localeCompare(b.name));

  return citiesWithDetails;
};

export const ACTION_TYPES = {
  TOGGLE_SELECT: 'TOGGLE_SELECT',
};

export const citiesReducer = (state = initialState.cities, action) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_SELECT: {
      return state.map((city) => {
        if (city.id === action.cityId) {
          return {
            ...city,
            selected: !city.selected,
          };
        }

        return city;
      });
    }

    default: {
      return state;
    }
  }
};

export const toggleCitySelected = cityId => ({
  type: ACTION_TYPES.TOGGLE_SELECT,
  cityId,
});
