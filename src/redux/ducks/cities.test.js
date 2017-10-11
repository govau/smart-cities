import {
  citiesReducer,
  toggleCitySelected,
  ACTION_TYPES,
} from './cities';

const startingState = [
  {
    id: 'perth',
    selected: false,
  },
  {
    id: 'sydney',
  },
  {
    id: 'melbourne',
    selected: true,
  },
];

describe('the reducer should handle a TOGGLE_SELECT action', () => {
  it('and change false to true', () => {
    const togglePerthState = citiesReducer(startingState, {
      type: ACTION_TYPES.TOGGLE_SELECT,
      cityId: 'perth',
    });

    expect(togglePerthState).toContainEqual(
      {
        id: 'perth',
        selected: true, // should change false to true
      }
    );

  });

  it('and add the selected prop and set it to true', () => {
    const toggleSydneyState = citiesReducer(startingState, {
      type: ACTION_TYPES.TOGGLE_SELECT,
      cityId: 'sydney',
    });

    expect(toggleSydneyState).toContainEqual(
      {
        id: 'sydney',
        selected: true, // should add the selected prop and set it to true
      }
    );

  });

  it('and change true to false', () => {
    const toggleMelbourneState = citiesReducer(startingState, {
      type: ACTION_TYPES.TOGGLE_SELECT,
      cityId: 'melbourne',
    });

    expect(toggleMelbourneState).toContainEqual(
      {
        id: 'melbourne',
        selected: false, // should change true to false
      }
    );
  });
});

it('toggleCitySelected should return the action with the city ID', () => {
  const action = toggleCitySelected('brisbane');

  expect(action).toEqual({
    type: ACTION_TYPES.TOGGLE_SELECT,
    cityId: 'brisbane',
  });
});
