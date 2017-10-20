import React from 'react';
import { shallow } from 'enzyme';
import CategoryBanner from './SubCategorySummary';

jest.mock('../Card/IndicatorCard/IndicatorCard', () => 'IndicatorCard');

const defaultProps = {
  colorName: 'jobs',
  tint: '020',
  shade: '600',
  name: 'Mock sub category',
  summaryIndicatorIds: [
    'population',
  ],
  cities: [
    {
      id: 'perth',
      name: 'Perth',
      indices: {}
    },
    {
      id: 'sydney',
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
