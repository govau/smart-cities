import getColorRange from './getColorRange';
import COLORS from '../style/_colors.scss';

it('should return a range of colors', () => {
  const result = getColorRange('planning');

  expect(result).toEqual([
    COLORS.PLANNING_200,
    COLORS.PLANNING_400,
    COLORS.PLANNING_800,
    COLORS.PLANNING_950,
  ]);
});
