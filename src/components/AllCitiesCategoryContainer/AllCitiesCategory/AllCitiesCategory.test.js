import React from 'react';
import { shallow } from 'enzyme';
import AllCitiesCategory from './AllCitiesCategory';

jest.mock('../../PageBanner/PageBanner', () => 'PageBanner');
jest.mock('../../SubCategorySummary/SubCategorySummary', () => 'SubCategorySummary');
jest.mock('../../CityColumnChart/CityColumnChart', () => 'CityColumnChart');

const defaultProps = {
  category: {
    colorName: 'jobs',
    description: 'This is the mock category',
    heroIndicatorId: 'population',
    id: 'mock',
    name: 'Mock category',
    subCategories: [
      {
        name: 'Buying houses',
        tint: '100',
        summaryIndicatorIds: [],
        charts: [],
      },
      {
        name: 'Living in houses',
        tint: '050',
        summaryIndicatorIds: [],
        charts: [],
      },
    ],
  },
  cities: [
    {
      name: 'Perth',
      indices: {}
    },
    {
      name: 'Sydney',
      indices: {}
    },
  ],
};

it('should match Snapshot', () => {
  const component = shallow(
    <AllCitiesCategory {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
