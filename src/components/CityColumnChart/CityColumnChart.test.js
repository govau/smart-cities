import React from 'react';
import { shallow } from 'enzyme';
import CityColumnChart from './CityColumnChart';
import Highcharts from 'highcharts';

const chartMock = {
  destroy: jest.fn(),
};

Highcharts.chart = jest.fn(() => chartMock);

console.warn = jest.fn();

jest.mock('../Tooltip/Tooltip', () => 'Tooltip');
jest.mock('../Legend/Legend', () => 'Legend');
jest.mock('./ChartTable/ChartTable', () => 'ChartTable');
jest.mock('../Icon/Icon', () => 'Icon');
jest.mock('../IndicatorIcon/IndicatorIcon', () => 'IndicatorIcon');
jest.mock('../../constants', () => ({
  STRINGS: {
    CONTEXTUAL_DEFINITION: 'CONTEXTUAL_DEFINITION',
    PERFORMANCE_DEFINITION: 'PERFORMANCE_DEFINITION',
  },
  COLOR_NAMES: {
    JOBS: 'jobs',
    PLANNING: 'planning',
  },
  INDICATORS: {
    population: {
      name: 'The population indicator name',
      format: '0[.]0a',
      contextual: true,
    },
    growthRate: {
      name: 'The growthRate indicator name',
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
  chart: {
    indicatorIds: [
      'population'
    ],
    description: 'the description of the task',
  },
  colorBase: 'jobs',
  highlightColorLight: 'JOBS_040',
  highlightColorDark: 'JOBS_600',
  cities: [
    {
      name: 'Perth',
      indicators: {
        population: 12,
        growthRate: 0.99,
      }
    },
    {
      name: 'Sydney',
      indicators: {
        population: 12,
        growthRate: 0.19,
      }
    },
  ],
  showChartPatterns: false,
  svgPatternBase: 'svg-pattern-base',
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
  expect(config.tooltip.borderColor).toBe('JOBS_900');
});

it('should call highcharts with the right config for multiple indicators', () => {
  jest.useFakeTimers();

  shallow(
    <CityColumnChart
      {...defaultProps}
      chart={{
        description: 'the description',
        indicatorIds: [
          'population',
          'growthRate',
        ]
      }}
    />);

  jest.runAllTimers();

  const config = Highcharts.chart.mock.calls[0][1];

  expect(config.series.length).toBe(2); // the two indicators
});

it('should call highcharts with the right config for showing patterns', () => {
  jest.useFakeTimers();

  // only show patterns when there's multiple indicators and showChartPatterns is true
  shallow(
    <CityColumnChart
      {...defaultProps}
      chart={{
        description: 'the description',
        indicatorIds: [
          'population',
          'growthRate',
        ]
      }}
      showChartPatterns={true}
    />);

  jest.runAllTimers();

  const config = Highcharts.chart.mock.calls[0][1];

  expect(config.series[0].color).toBe('url(#svg-pattern-base-0)');
  expect(config.series[1].color).toBe('url(#svg-pattern-base-1)');
});

it('should call highcharts with the right config for not showing patterns', () => {
  jest.useFakeTimers();

  // only show patterns when there's multiple indicators and showChartPatterns is true
  shallow(
    <CityColumnChart
      {...defaultProps}
      chart={{
        description: 'the description',
        indicatorIds: [
          'population',
          'growthRate',
        ]
      }}
      showChartPatterns={false}
    />);

  jest.runAllTimers();

  const config = Highcharts.chart.mock.calls[0][1];

  expect(config.series[0].color).toBe('red');
  expect(config.series[1].color).toBe('yellow');
});

it('should update the chart when new props arrive', () => {
  jest.useFakeTimers();

  const component = shallow(<CityColumnChart {...defaultProps} />);

  jest.runAllTimers();

  expect(Highcharts.chart).toHaveBeenCalledTimes(1);

  component.setProps({
    colorBase: 'planning',
  });

  // props changed, and a chart update is queued, but not run yet
  expect(Highcharts.chart).toHaveBeenCalledTimes(1);

  // now run the timer
  jest.runAllTimers();

  // now it's been updated (rendered again)
  expect(Highcharts.chart).toHaveBeenCalledTimes(2);

  const config = Highcharts.chart.mock.calls[1][1];

  expect(config.tooltip.borderColor).toBe('PLANNING_900');
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
      chart={{
        description: 'the description',
        indicatorIds: [
          'population',
          'growthRate',
        ]
      }}
    />
  );

  expect(component.find('Legend').length).toBe(1);
});

it('should not render a legend when there is only one indicator', () => {
  const component = shallow(
    <CityColumnChart
      {...defaultProps}
    />
  );

  expect(component.find('Legend').length).toBe(0);
});
