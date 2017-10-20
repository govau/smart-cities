import { CATEGORIES } from './categories.js';
import INDICATORS from './indicators.js';
import iconDefinitions from '../components/Icon/iconDefinitions';

const iconIds = Object.keys(iconDefinitions);

// since the categories tree only refers to indicators by string, it is brittle
// so we test here that each indicator id used is available in the INDICATORS object
CATEGORIES.forEach((category) => {
  // test the hero indicator ID
  it(`The hero indicator '${category.heroIndicatorId}' should be a valid indicator`, () => {
    expect(INDICATORS[category.heroIndicatorId]).toBeDefined();
  });

  // test the icon ID
  if (category.iconId) {
    it(`The icon ID '${category.iconId}' should be a valid icon`, () => {
      expect(iconIds.includes(category.iconId)).toBe(true);
    });
  }

  // test the sub-category indicator IDs
  category.subCategories.forEach((subCategory) => {
    subCategory.summaryIndicatorIds.forEach((indicator) => {
      it(`The sub category summary indicator '${indicator}' should be a valid indicator`, () => {
        expect(INDICATORS[indicator]).toBeDefined();
      });
    });

    // test the icon ID
    if (subCategory.iconId) {
      it(`The icon ID '${subCategory.iconId}' should be a valid icon`, () => {
        expect(iconIds.includes(subCategory.iconId)).toBe(true);
      });
    }

    if (subCategory.charts) {
      subCategory.charts.forEach((chart) => {
        chart.indicatorIds.forEach((indicator) => {
          it(`The sub category chart indicator '${indicator}' should be a valid indicator`, () => {
            expect(INDICATORS[indicator]).toBeDefined();
          });
        });
      });
    }
  });
});
