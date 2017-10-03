import React from 'react';
import { shallow } from 'enzyme';
import CityBarChart from './CityBarChart';

console.warn = jest.fn();

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

it('should warn and render render nothing if a non-numeric indicator is passed in', () => {
  const component = shallow(
    <CityBarChart
      {...defaultProps}
      indicators={['investmentPlanLink']}
    />
  );

  expect(console.warn).toHaveBeenCalledWith(
    'All indicators passed to a bar chart must be numeric. Check investmentPlanLink'
  );
  expect(component.html()).toBe(null);
});
