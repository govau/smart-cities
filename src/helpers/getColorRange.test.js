import getColorRange from './getColorRange';

it('should return three colours', () => {
  const result = getColorRange('rgb(103, 103, 103)', 4);

  expect(result).toEqual([
    'rgb(153, 153, 153)',
    'rgb(92, 92, 92)',
    'rgb(55, 55, 55)',
    'rgb(33, 33, 33)',
  ]);
});
