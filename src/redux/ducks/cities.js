import initialState from './../initialState';

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
