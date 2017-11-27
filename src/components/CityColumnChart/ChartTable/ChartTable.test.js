import React from 'react';
import { shallow } from 'enzyme';
import ChartTable from './ChartTable';

jest.mock('../../../constants', () => ({
  INDICATORS: {
    oneThing: {
      format: '0.0%',
      legendText: 'One thing',
    },
    anotherThing: {
      format: '0.0%',
      legendText: 'Another thing',
    },
  },
}));

const defaultProps = {
  chart: {
    name: 'The things',
    indicatorIds: [
      'oneThing',
      'anotherThing',
    ],
    description: 'This shows one thing and the other thing.',
  },
  cities: [
    {
      id: 'sydney',
      name: 'Sydney',
      indicators: {
        oneThing: 1,
        anotherThing: 0.62,
      },
    },
    {
      id: 'perth',
      name: 'Perth',
      indicators: {
        oneThing: 0.8,
        anotherThing: 10,
      },
    },
  ],
};

it('should match Snapshot', () => {
  const component = shallow(<ChartTable {...defaultProps} />);
  expect(component.debug()).toMatchSnapshot();
});

it('should render a table', () => {
  const component = shallow(<ChartTable {...defaultProps} />);

  expect(component.find('caption').text()).toBe('Table showing The things for each city. This shows one thing and the other thing.')
});

it('should render each city as a row', () => {
  const component = shallow(<ChartTable {...defaultProps} />);

  expect(component.find('tbody tr').length).toBe(2);
  // test the two values for the Sydney row
  expect(component.find('tbody tr').at(0).find('td').at(0).text()).toBe('100.0%');
  expect(component.find('tbody tr').at(0).find('td').at(1).text()).toBe('62.0%');
});

it('should render each indicator as a col', () => {
  const component = shallow(<ChartTable {...defaultProps} />);

  expect(component.find('thead th').length).toBe(3);
  expect(component.find('thead th').at(1).text()).toBe('One thing');
  expect(component.find('thead th').at(2).text()).toBe('Another thing');
});
