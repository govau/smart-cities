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
        highlightColorDark: 'JOBS_600',
        summaryIndicatorIds: [],
        charts: [],
      },
      {
        name: 'Living in houses',
        highlightColorDark: 'JOBS_700',
        summaryIndicatorIds: [],
        charts: [
          {
            name: 'Population',
            indicatorIds: ['population'],
          },
        ],
      },
    ],
  },
  cities: [
    {
      name: 'Perth',
      indicators: {}
    },
    {
      name: 'Sydney',
      indicators: {}
    },
  ],
  setShowChartPatterns: () => {},
  showChartPatterns: false,
};

it('should match Snapshot', () => {
  const component = shallow(
    <AllCitiesCategory {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
