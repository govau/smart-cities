import React from 'react';
import { shallow } from 'enzyme';
import CityBarChart from './CityBarChart';

const defaultProps = {
  colorBase: 'jobs',
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
  indicators: [
    'population'
  ]
};

it('should match Snapshot', () => {
  const component = shallow(
    <CityBarChart {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

describe('when displaying indicators with percentage units', () => {
  const component = shallow(
    <CityBarChart
      {...defaultProps}
      indicators={['growthRate']} // this has percentage units
      ceiling={1.1}
    />
  );

  const chartConfig = component.find('AbstractWidget').prop('config');

  it('should display labels with a "%" sign', () => {
    expect(chartConfig.yAxis.labels.format).toBe('{value}%');
  });

  it('should multiply values by 100', () => {
    expect(chartConfig.series[0].data).toEqual([99, 19]); // were 0.99 and 0.19
    expect(chartConfig.yAxis.ceiling).toBe(110);
  });
});

describe('when displaying indicators with numberic units', () => {
  const component = shallow(
    <CityBarChart
      {...defaultProps}
      indicators={['population']} // this has number units
    />
  );

  const chartConfig = component.find('AbstractWidget').prop('config');

  it('should not display a "%" sign for in labels', () => {
    expect(chartConfig.yAxis.labels.format).toBe('{value}');
  });


  it('should not multiply values by 100', () => {
    expect(chartConfig.series[0].data).toEqual([12, 12]);
  });
});

it('should render a legend when there is more than one indicator', () => {
  const component = shallow(
    <CityBarChart
      {...defaultProps}
      indicators={['population', 'growthRate']}
    />
  );

  expect(component.find('Legend').length).toBe(1);
});

it('should not render a legend when there is only one indicator', () => {
  const component = shallow(
    <CityBarChart
      {...defaultProps}
      indicators={['population']}
    />
  );

  expect(component.find('Legend').length).toBe(0);
});
