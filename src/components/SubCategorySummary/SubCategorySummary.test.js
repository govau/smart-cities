import React from 'react';
import { shallow } from 'enzyme';
import CategoryBanner from './SubCategorySummary';
import { CATEGORY_IDS } from '../../constants';

jest.mock('../IndicatorCard/IndicatorCard', () => 'IndicatorCard');
jest.mock('../Icon/Icon', () => 'Icon');

const defaultProps = {
  categoryId: 'jobs',
  categoryColorName: 'primary',
  highlightColorLight: 'JOBS_020',
  highlightColorDark: 'JOBS_600',
  name: 'Mock sub category',
  iconId: 'infrastructureGettingToWork',
  summaryIndicatorIds: [
    'population',
  ],
  cities: [
    {
      id: 'perth',
      name: 'Perth',
      indicators: {}
    },
    {
      id: 'sydney',
      name: 'Sydney',
      indicators: {}
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
