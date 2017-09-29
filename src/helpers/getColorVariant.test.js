import getColorVariant from './getColorVariant';

jest.mock('../style/_colors.scss', () => ({
  JOBS_500: 'blue',
  JOBS_100: 'light blue',
  HOUSING_500: 'red',
  HOUSING_100: 'light red',
  WHITE: 'white',
}));

it('should return the base color if no shade is passed in', () => {
  const color = getColorVariant('white');

  expect(color).toBe('white');
});

it('should return a shade of the base color', () => {
  const color = getColorVariant('jobs', '100');

  expect(color).toBe('light blue');
});
