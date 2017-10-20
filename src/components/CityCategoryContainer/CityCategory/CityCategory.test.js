import React from 'react';
import { shallow } from 'enzyme';
import CityCategory from './CityCategory';

jest.mock('../../PageBanner/PageBanner', () => 'PageBanner');
jest.mock('../../SubCategorySummary/SubCategorySummary', () => 'SubCategorySummary');

const defaultProps = {
  category: {
    name: 'Mock category',
    description: 'The description of the category',
    colorName: 'jobs',
    heroIndicatorId: 'population',
    iconId: 'infrastructureGettingToWork',
    id: 'mock',
    subCategories: [
      {
        name: 'Buying houses',
        colorVariation: '100',
        summaryIndicatorIds: [],
      },
      {
        name: 'Living in houses',
        colorVariation: '050',
        summaryIndicatorIds: [],
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
      description: 'description of Perth',
      name: 'Perth',
    },
    {
      id: 'sydney',
      description: 'description of Sydney',
      name: 'Sydney',
    },
    {
      id: 'melbourne',
      description: 'description of Melbourne',
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
