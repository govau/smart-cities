import React from 'react';
import { shallow } from 'enzyme';
import CityCategory from './CityCategory';

jest.mock('../../PageBanner/PageBanner', () => 'PageBanner');
jest.mock('../../SubCategorySummary/SubCategorySummary', () => 'SubCategorySummary');
jest.mock('../../../helpers/getSubCategoryOfHeroIndicator', () => () => 'mock sub category');

const defaultProps = {
  category: {
    name: 'Mock category',
    description: 'The description of the category',
    colorName: 'jobs',
    heroIndicatorId: 'population',
    id: 'mock',
    subCategories: [
      {
        name: 'Buying houses',
        colorVariation: '100',
        highlightColorDark: 'HOUSING_600',
        summaryIndicatorIds: [],
      },
      {
        name: 'Living in houses',
        colorVariation: '050',
        highlightColorDark: 'HOUSING_700',
        summaryIndicatorIds: [],
      },
    ],
  },
  city: {
    name: 'Perth',
    id: 'perth',
    indicators: {},
  },
  cities: [
    {
      id: 'perth',
      description: 'description of Perth',
      name: 'Perth',
      indicators: {}
    },
    {
      id: 'sydney',
      description: 'description of Sydney',
      name: 'Sydney',
      indicators: {}
    },
    {
      id: 'melbourne',
      description: 'description of Melbourne',
      name: 'Melbourne',
      indicators: {}
    },
  ],
  toggleCitySelected: () => {},
};

it('should match Snapshot', () => {
  const component = shallow(
    <CityCategory {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should pass the sub category of the hero indicator to the banner', () => {
  const component = shallow(
    <CityCategory {...defaultProps} />
  );

  expect(component.find('PageBanner').prop('indicatorSubCategory')).toBe('mock sub category');
});
