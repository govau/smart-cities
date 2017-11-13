import INDICATORS from './indicators.js';
import { indicatorExistsInCategory } from './categories.test.js';

Object.entries(INDICATORS).forEach(([indicatorId, indicator]) => {
  it(`The indicator '${indicator.name}' should have a format defined`, () => {
    expect(indicator.format).toBeDefined();
  });

  it(`The indicator '${indicator.name}' should have a format defined`, () => {
    expect(indicator.source).toBeDefined();
  });

  it(`The indicator '${indicator.name}' should be used in a category`, () => {
    expect(indicatorExistsInCategory(indicatorId)).toBe(true);
  });
});
