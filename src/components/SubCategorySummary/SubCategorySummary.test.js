import React from 'react';
import { shallow } from 'enzyme';
import CategoryBanner from './SubCategorySummary';
import { CATEGORY_IDS } from '../../constants';

jest.mock('../Card/IndicatorCard/IndicatorCard', () => 'IndicatorCard');

const defaultProps = {
  categoryId: 'jobs',
  highlightColorLight: 'JOBS_020',
  highlightColorDark: 'JOBS_600',
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

it('should link to charts with category name in the text', () => {
  const component = shallow(
    <CategoryBanner {...defaultProps} />
  );

  expect(component.find('.linkWrapper').text()).toBe('View all Mock sub category charts');
});

it('should link to charts with generic text for the context page', () => {
  const component = shallow(
    <CategoryBanner
      {...defaultProps}
      categoryId={CATEGORY_IDS.CONTEXT}
    />
  );

  expect(component.find('.linkWrapper').text()).toBe('View contextual charts');
});
