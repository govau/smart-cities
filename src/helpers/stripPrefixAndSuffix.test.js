import stripPrefixAndSuffix from './stripPrefixAndSuffix';

console.warn = jest.fn();

it('should return the string if there is no number', () => {
  expect(stripPrefixAndSuffix('$dogs')).toEqual(['', '$dogs', '']);
  expect(stripPrefixAndSuffix('cats')).toEqual(['', 'cats', '']);

  // these two match the main regex because they have a comma and a point
  expect(stripPrefixAndSuffix('this, that')).toEqual(['', 'this, that', '']);
  expect(stripPrefixAndSuffix('one.point.two')).toEqual(['', 'one.point.two', '']);
});

it('should return empty strings if there is no string', () => {
  expect(stripPrefixAndSuffix()).toEqual(['', '', '']);
  expect(stripPrefixAndSuffix(null)).toEqual(['', '', '']);
  expect(stripPrefixAndSuffix(true)).toEqual(['', '', '']);
  expect(stripPrefixAndSuffix('')).toEqual(['', '', '']);
});

it('should warn when no string or number is passed', () => {
  expect(stripPrefixAndSuffix(null)).toEqual(['', '', '']);
  expect(console.warn).toHaveBeenCalledWith('Expected a number or a string. Got null');

  expect(stripPrefixAndSuffix(['1', '2'])).toEqual(['', '', '']);
  expect(console.warn).toHaveBeenCalledWith('Expected a number or a string. Got 1,2');
});

it('should convert a number to a string', () => {
  expect(stripPrefixAndSuffix(77)).toEqual(['', '77', '']);
});

it('should handle a legitimate falsey value', () => {
  expect(stripPrefixAndSuffix(0)).toEqual(['', '0', '']);
});

it('should return just the string if there is only a number', () => {
  expect(stripPrefixAndSuffix('100')).toEqual(['', '100', '']);
});

it('should return the prefix', () => {
  expect(stripPrefixAndSuffix('$40')).toEqual(['$', '40', '']);
  expect(stripPrefixAndSuffix('AUD$40')).toEqual(['AUD$', '40', '']);
  expect(stripPrefixAndSuffix('$40.00')).toEqual(['$', '40.00', '']);
});

it('should return the suffix', () => {
  expect(stripPrefixAndSuffix('40.4%')).toEqual(['', '40.4', '%']);
  expect(stripPrefixAndSuffix('12k')).toEqual(['', '12', 'k']);
});

it('should return the prefix and the suffix', () => {
  expect(stripPrefixAndSuffix('$12.3k')).toEqual(['$', '12.3', 'k']);
});

it('should handle decimals', () => {
  expect(stripPrefixAndSuffix('$100.00')).toEqual(['$', '100.00', '']);
});

it('should handle commas', () => {
  expect(stripPrefixAndSuffix('1,000%')).toEqual(['', '1,000', '%']);
});
