import aggregateIndicatorForCities from './aggregateIndicatorForCities';

// set some specific aggregation methods for these indicators
jest.mock('../constants/indicators', () => ({
  population: {
    aggregationMethod: 'SUM',
  },
  unemployment: {
    aggregationMethod: 'MEDIAN',
  },
}));

const citiesMock = [
  {
    name: 'Sydney',
    indices: {
      population: 100,
      unemployment: 0.05,
    },
  },
  {
    name: 'Perth',
    indices: {
      population: 50,
      unemployment: 0.06,
    },
  },
  {
    name: 'Melbourne',
    indices: {
      population: 80,
      unemployment: 0.08,
    },
  },
  {
    name: 'Brisbane',
    indices: {
      population: 70,
      unemployment: 0.07,
    },
  },
];

it('should calculate the sum', () => {
  const result = aggregateIndicatorForCities('population', citiesMock);

  expect(result).toBe(300);
});

it('should calculate the median', () => {
  const result = aggregateIndicatorForCities('unemployment', citiesMock);

  expect(result).toBe(0.065);
});
