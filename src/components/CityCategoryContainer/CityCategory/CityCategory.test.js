import React from 'react';
import { shallow } from 'enzyme';
import CityCategory from './CityCategory';

jest.mock('../../CategoryBanner/CategoryBanner', () => 'CategoryBanner');
jest.mock('../../SubCategorySummary/SubCategorySummary', () => 'SubCategorySummary');

const defaultProps = {
  category: {
    name: 'Mock category',
    colorName: 'jobs',
    id: 'mock',
    subCategories: [
      {
        name: 'Buying houses',
        colorVariation: '100',
        indicatorIds: [],
      },
      {
        name: 'Living in houses',
        colorVariation: '050',
        indicatorIds: [
        ],
      },
    ],
  },
  city: {
    name: 'Perth',
    id: 'perth',
  },
  cities: [
    {
      id: 'perth',
      name: 'Perth',
    },
    {
      id: 'sydney',
      name: 'Sydney',
    },
    {
      id: 'melbourne',
      name: 'Melbourne',
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
