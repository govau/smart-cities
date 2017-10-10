import React from 'react';
import { shallow } from 'enzyme';
import CityColumnChart from './CityColumnChart';

console.warn = jest.fn();

jest.mock('../../helpers/getColorRange', () => () => [
  'red',
  'yellow',
  'blue',
]);

const defaultProps = {
  colorBase: 'jobs',
  colorVariation: '600',
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
