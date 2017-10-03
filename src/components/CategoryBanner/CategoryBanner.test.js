import React from 'react';
import { shallow } from 'enzyme';
import CategoryBanner from './CategoryBanner';

jest.mock('../Card/IndicatorCard/IndicatorCard', () => 'IndicatorCard');

const defaultProps = {
  category: {
    colorName: 'jobs',
    description: 'This is the mock category',
    heroIndicator: {
      id: 'population',
      aggregationMethod: 'SUM',
    },
    id: 'mock',
    name: 'Mock category',
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
    <CategoryBanner {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
