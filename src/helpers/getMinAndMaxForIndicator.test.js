import getMinAndMaxForIndicator from './getMinAndMaxForIndicator';

const citiesMock = [
  {
    name: 'Sydney',
    indicators: {
      population: 100,
      unemploymentGrowth: 0.05,
    },
  },
  {
    name: 'Perth',
    indicators: {
      population: 50,
      unemploymentGrowth: 0.06,
    },
  },
  {
    name: 'Melbourne',
    indicators: {
      population: 80,
      unemploymentGrowth: -0.08,
    },
  },
  {
    name: 'Brisbane',
    indicators: {
      population: 70,
      unemploymentGrowth: 0.07,
    },
  },
];

it('should return the min and max', () => {
  const result = getMinAndMaxForIndicator('population', citiesMock);

  expect(result).toEqual([50, 100]);
});

it('should return the min and max including negatives', () => {
  const result = getMinAndMaxForIndicator('unemploymentGrowth', citiesMock);

  expect(result).toEqual([-0.08, 0.07]);
});
