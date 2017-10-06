import React from 'react';
import { shallow } from 'enzyme';
import AllCitiesCategory from './AllCitiesCategory';

jest.mock('../../CategoryBanner/CategoryBanner', () => 'CategoryBanner');

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
