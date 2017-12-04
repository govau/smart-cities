import React from 'react';
import { shallow } from 'enzyme';
import CategoryBanner from './SubCategorySummary';

jest.mock('../IndicatorCard/IndicatorCard', () => 'IndicatorCard');
jest.mock('../Icon/Icon', () => 'Icon');

const defaultProps = {
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
  charts: [1, 2, 3], // the charts array is only used to get the number of charts
};

it('should match Snapshot', () => {
  const component = shallow(
    <CategoryBanner {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should show the correct number of charts in the link to charts', () => {
  const component = shallow(
    <CategoryBanner {...defaultProps} />
  );

  expect(component.find('.linkText').text()).toBe('View all 3 charts');
});

it('should show the non-plural text to charts when only one chart', () => {
  const component = shallow(
    <CategoryBanner
      {...defaultProps}
      charts={[1]}
    />
  );

  expect(component.find('.linkText').text()).toBe('View 1 chart');
});
