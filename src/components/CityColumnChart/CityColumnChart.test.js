import React from 'react';
import { shallow } from 'enzyme';
import CityColumnChart from './CityColumnChart';
import Highcharts from 'highcharts';

const chartMock = {
  destroy: jest.fn(),
};

Highcharts.chart = jest.fn(() => chartMock);

console.warn = jest.fn();

jest.mock('../AboutTooltip/AboutTooltip', () => 'AboutTooltip');
jest.mock('../Legend/Legend', () => 'Legend');
jest.mock('../Icon/Icon', () => 'Icon');
jest.mock('../../constants', () => ({
  COLOR_NAMES: {
    JOBS: 'jobs',
  },
  INDICATORS: {
    population: {
      name: 'The population indicator name',
      shortDescription: 'The population indicator short description',
      longDescription: 'The population indicator long description',
      format: '0[.]0a',
      contextual: true,
    },
    growthRate: {
      name: 'The growthRate indicator name',
      shortDescription: 'The growthRate indicator short description',
      longDescription: 'The growthRate indicator long description',
      format: '0[.]0a',
      contextual: false,
    },
  }
}));

jest.mock('../../helpers/getColorRange', () => () => [
  'red',
  'yellow',
  'blue',
]);

const defaultProps = {
  colorBase: 'jobs',
  highlightColorLight: 'JOBS_040',
  highlightColorDark: 'JOBS_600',
  cities: [
    {
      name: 'Perth',
      indices: {
        population: 12,
        growthRate: 0.99,
      }
    },
    {
      name: 'Sydney',
      indices: {
        population: 12,
        growthRate: 0.19,
      }
    },
  ],
  indicatorIds: [
    'population'
  ]
};

it('should match Snapshot', () => {
  const component = shallow(
    <CityColumnChart {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should not render the chart immediately', () => {
  jest.useFakeTimers();

  shallow(<CityColumnChart {...defaultProps} />);

  // not rendered yet
  expect(Highcharts.chart).toHaveBeenCalledTimes(0);

  // fast forward until all timers are fired
  jest.runAllTimers();

  // now it's rendered
  expect(Highcharts.chart).toHaveBeenCalledTimes(1);
});

it('should call highcharts with the right div ID', () => {
  jest.useFakeTimers();

  shallow(<CityColumnChart {...defaultProps} />);

  jest.runAllTimers();

  expect(Highcharts.chart).toHaveBeenCalledWith(
    'population-chart',
    expect.any(Object),
  );
});

it('should call highcharts with the right config', () => {
  jest.useFakeTimers();

  shallow(<CityColumnChart {...defaultProps} />);

  jest.runAllTimers();

  const config = Highcharts.chart.mock.calls[0][1];

  expect(config.series.length).toBe(1);
  expect(config.xAxis.categories.length).toBe(2); // the two mock cites
  expect(config.yAxis.title.text).toBe('The population indicator short description');
});

it('should call highcharts with the right config for multiple indicators', () => {
  jest.useFakeTimers();

  shallow(
    <CityColumnChart
      {...defaultProps}
      indicatorIds={['population', 'growthRate']}
    />);

  jest.runAllTimers();

  const config = Highcharts.chart.mock.calls[0][1];

  expect(config.series.length).toBe(2); // the two indicators
});

it('should update the chart when new props arrive', () => {
  jest.useFakeTimers();

  const component = shallow(<CityColumnChart {...defaultProps} />);

  jest.runAllTimers();

  expect(Highcharts.chart).toHaveBeenCalledTimes(1);

  component.setProps({
    shortDescription: 'Some new title',
  });

  // props changed, and a chart update is queued, but not run yet
  expect(Highcharts.chart).toHaveBeenCalledTimes(1);

  // now run the timer
  jest.runAllTimers();

  // now it's been updated (rendered again)
  expect(Highcharts.chart).toHaveBeenCalledTimes(2);

  const config = Highcharts.chart.mock.calls[1][1];

  expect(config.yAxis.title.text).toBe('Some new title');
});

it('should destroy the chart when dismounting', () => {
  jest.useFakeTimers();

  const component = shallow(<CityColumnChart {...defaultProps} />);

  jest.runAllTimers();

  expect(chartMock.destroy).toHaveBeenCalledTimes(0);

  component.unmount();

  expect(chartMock.destroy).toHaveBeenCalledTimes(1);
});

it('should render a legend when there is more than one indicator', () => {
  const component = shallow(
    <CityColumnChart
      {...defaultProps}
      indicatorIds={['population', 'growthRate']}
    />
  );

  expect(component.find('Legend').length).toBe(1);
});

it('should not render a legend when there is only one indicator', () => {
  const component = shallow(
    <CityColumnChart
      {...defaultProps}
      indicatorIds={['population']}
    />
  );

  expect(component.find('Legend').length).toBe(0);
});
