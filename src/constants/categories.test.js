import { CATEGORY_IDS } from './categories';
import { CATEGORIES } from './categories';
import { MAX_CATEGORY_NAV_TEXT_LENGTH } from './misc';
import INDICATORS from './indicators.js';
import iconDefinitions from '../components/Icon/iconDefinitions';

const iconIds = Object.keys(iconDefinitions);

const heroExistsInCharts = (heroIndicatorId, subCategories) => {
  let result = false;

  subCategories.forEach(subCategory => {
    subCategory.charts.forEach(chart => {
      if (chart.indicatorIds.includes(heroIndicatorId)) result = true;
    });
  });

  return result;
};

export const indicatorExistsInCategory = (indicatorId) => {
  let result = false;

  CATEGORIES
    .filter(category => category.id !== CATEGORY_IDS.CONTEXT)
    .forEach(category => {
      category.subCategories.forEach(subCategory => {
        subCategory.charts.forEach(chart => {
          if (chart.indicatorIds.includes(indicatorId)) result = true;
        });
      });
    });

  return result;
};

const allIndicatorsHaveLegendText = (indicatorIds) => {
  let result = true;

  indicatorIds.forEach(indicatorId => {
    if (!INDICATORS[indicatorId].legendText) result = false;
  });

  return result;
};

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

  it(`The hero indicator '${category.heroIndicatorId}' should exist in a chart`, () => {
    expect(heroExistsInCharts(category.heroIndicatorId, category.subCategories)).toBe(true);
  });

  it(`${category.navName || category.name}: name (or navName) should be ${MAX_CATEGORY_NAV_TEXT_LENGTH} chars or shorter`, () => {
    const name = category.navName || category.name;
    expect(name.length).toBeLessThanOrEqual(MAX_CATEGORY_NAV_TEXT_LENGTH);
  });

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

          if (category.id === CATEGORY_IDS.CONTEXT) {
            it(`The indicator '${indicator}' should exist in the context and one other category`, () => {
              expect(indicatorExistsInCategory(indicator)).toBe(true);
            });
          }
        });

        if (chart.indicatorIds.length > 1) {
          // If a chart has more than one indicator, a legend will be shown
          // so those indicators must have a legendText property
          it(`The chart '${chart.name}' has indicators missing legendText`, () => {
            expect(allIndicatorsHaveLegendText(chart.indicatorIds)).toBe(true);
          });
        } else {
          // If there is only one chart, its name should match the indicator name
          // (for consistency between chart titles and indicator card text)
          it(`The chart name '${chart.name}' should match the indicator name`, () => {
            expect(INDICATORS[chart.indicatorIds[0]].name).toBe(chart.name);
          });
        }
      });
    }
  });
});
