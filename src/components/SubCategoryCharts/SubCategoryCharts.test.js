import React from 'react';
import { shallow } from 'enzyme';
import SubCategoryCharts from './SubCategoryCharts';

jest.mock('../CityColumnChart/CityColumnChart', () => 'CityColumnChart');
jest.mock('../Icon/Icon', () => 'Icon');
jest.mock('../Toggle/Toggle', () => 'Toggle');

const setShowChartPatternsMock = jest.fn();

const defaultProps = {
  subCategory: {
    name: 'Buying houses',
    highlightColorDark: 'JOBS_600',
    summaryIndicatorIds: [],
    charts: [],
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
  colorName: 'jobs',
  heroIndicatorId: 'population',
  highlightColorDark: 'JOBS_600',
  setShowChartPatterns: setShowChartPatternsMock,
  showChartPatterns: false,
};

it('should match Snapshot', () => {
  const component = shallow(
    <SubCategoryCharts {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should show chart patterns when showChartPatterns is true', () => {
  const component = shallow(
    <SubCategoryCharts
      {...defaultProps}
      showChartPatterns={true}
    />
  );

  expect(component.find('svg').length).toBe(1);
  expect(component.find('pattern').length).toBe(4);
});

it('should not show chart patterns when showChartPatterns is false', () => {
  const component = shallow(
    <SubCategoryCharts
      {...defaultProps}
      showChartPatterns={false}
    />
  );

  expect(component.find('svg').length).toBe(0);
});

it('should toggle showPatterns when the toggle is clicked', () => {
  const component = shallow(
    <SubCategoryCharts {...defaultProps} />
  );

  component.find('.patternToggle').simulate('change');

  expect(setShowChartPatternsMock).toHaveBeenCalledTimes(1);
});
