import React from 'react';
import { shallow } from 'enzyme';
import Legend from './Legend';

const defaultProps = {
  series: [
    {
      color: 'red',
      name: 'House'
    },
    {
      color: 'blue',
      name: 'Apartment'
    },
    {
      color: 'grey',
      name: 'Other'
    },
  ],
};

it('should match Snapshot', () => {
  const component = shallow(
    <Legend {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should render the correct number of legend items', () => {
  const component = shallow(
    <Legend {...defaultProps} />
  );

  expect(component.find('.legendItem').length).toBe(defaultProps.series.length);
});

it('applies the passed in color to the background', () => {
  const component = shallow(
    <Legend {...defaultProps} />
  );

  const secondItemStyle = component.find('.legendItemMarker').at(1).prop('style');

  expect(secondItemStyle.background).toBe(defaultProps.series[1].color);
});
