import getColorVariant from './getColorVariant';

jest.mock('../style/_colors.scss', () => ({
  JOBS_500: 'blue',
  JOBS_100: 'light blue',
  HOUSING_500: 'red',
  HOUSING_100: 'light red',
  WHITE: 'white',
}));

console.warn = jest.fn();

it('should return the base color if no shade is passed in', () => {
  const color = getColorVariant('white');

  expect(color).toBe('white');
});

it('should return a shade of the base color', () => {
  const color = getColorVariant('jobs', '100');

  expect(color).toBe('light blue');
});

it('should warn if a color/shade combo does not exist', () => {
  const color = getColorVariant('jobs', '999');

  expect(console.warn).toHaveBeenCalledWith('JOBS_999 is not a known color');
  expect(color).toBeUndefined();
});

it('should warn if a color does not exist', () => {
  const color = getColorVariant('JOBS_999');

  expect(console.warn).toHaveBeenCalledWith('JOBS_999 is not a known color');
  expect(color).toBeUndefined();
});
