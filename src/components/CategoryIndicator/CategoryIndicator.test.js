import React from 'react';
import { shallow } from 'enzyme';
import CategoryIndicator from './CategoryIndicator';

jest.mock('../Icon/Icon', () => 'Icon');

const defaultProps = {
  category: {
    colorName: 'jobs',
    heroIndicatorId: 'population',
    iconId: 'infrastructureGettingToWork',
    id: 'jobs',
    name: 'Jobs and Skills',
  },
  cities: [
    {
      id: 'perth',
      name: 'Perth',
      indices: {
        population: 77,
      }
    },
    {
      id: 'sydney',
      name: 'Sydney',
      indices: {
        population: 23,
      }
    },
  ],
};

it('should match Snapshot', () => {
  const component = shallow(
    <CategoryIndicator {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should aggregate data for all cities', () => {
  const component = shallow(
    <CategoryIndicator {...defaultProps} />
  );

  expect(component.find('IndicatorCard').prop('value')).toBe(100); // 77 + 23
});

it('should show data for a single city', () => {
  const component = shallow(
    <CategoryIndicator
      {...defaultProps}
      cities={undefined}
      city={{
        id: 'perth',
        name: 'Perth',
        indices: {
          population: 77,
        },
      }}
    />
  );

  expect(component.find('IndicatorCard').prop('value')).toBe(77);
});

it('should create a link to the all cities category page', () => {
  const component = shallow(
    <CategoryIndicator {...defaultProps} />
  );

  expect(component.find('NavLink').prop('to')).toBe('/all-cities/jobs');
});

it('should create a link to the city category page', () => {
  const component = shallow(
    <CategoryIndicator
      {...defaultProps}
      cities={undefined}
      city={{
        id: 'perth',
        name: 'Perth',
        indices: {
          population: 77,
        },
      }}
    />
  );

  expect(component.find('NavLink').prop('to')).toBe('/perth/jobs');
});

it('should use the appropriate color', () => {
  const component = shallow(
    <CategoryIndicator
      {...defaultProps}
    />
  );

  expect(component.find('IndicatorCard').prop('color')).toBe('JOBS_500');
  expect(component.find('Icon').prop('color')).toBe('JOBS_500');
});
