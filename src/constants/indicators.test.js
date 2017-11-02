import INDICATORS from './indicators.js';

Object.values(INDICATORS).forEach((indicator) => {
  it(`The indicator '${indicator.name}' should have a format defined`, () => {
    expect(indicator.format).toBeDefined();
  });

  it(`The indicator '${indicator.name}' should have a format defined`, () => {
    expect(indicator.source).toBeDefined();
  });
});
