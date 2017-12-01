import {
  citiesReducer,
  parseCityData,
  toggleCitySelected,
  ACTION_TYPES,
} from './cities';
import { CITIES } from '../../constants';

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

describe('parseCityData', () => {
  console.warn = jest.fn();

  const rawData = [
    {
      source: 'Wollongong',
      indicators: {
        population: 77000,
        growthRate: 0.03,
      },
    },
    {
      source: 'Albury - Wodonga',
      indicators: {
        population: 88000,
        growthRate: 0.05,
      },
    },
    {
      source: 'An unrecognized city',
      indicators: {
        population: 99000,
        growthRate: 0.07,
      },
    },
  ];

  it('should merge source data with city details', () => {
    const parsedCities = parseCityData(rawData);

    const alburyWodonga = CITIES['Albury - Wodonga'];

    // this should combine the indicators from the raw data
    // with the id, name and description from CITIES
    expect(parsedCities[0]).toEqual(expect.objectContaining({
      id: alburyWodonga.id,
      name: alburyWodonga.name,
      description: alburyWodonga.description,
      indicators: rawData[1].indicators,
    }));
  });

  it('should sort the cities', () => {
    const parsedCities = parseCityData(rawData);

    expect(parsedCities[0].name).toBe('Albury-Wodonga');
    expect(parsedCities[1].name).toBe('Wollongong');
  });

  it('should remove and warn about unknown cities', () => {
    const parsedCities = parseCityData(rawData);

    expect(parsedCities.length).toBe(2);
    expect(console.warn).toHaveBeenCalledWith('An unrecognized city is not a recognized city.');
  });
});
