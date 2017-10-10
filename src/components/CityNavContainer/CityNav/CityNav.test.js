import React from 'react';
import { shallow } from 'enzyme';
import CityNav from './CityNav';

const defaultProps = {
  categoryId: 'mock',
  cityId: 'perth',
  cities: [
    {
      id: 'perth',
      name: 'Perth',
    },
    {
      id: 'sydney',
      name: 'Sydney',
    },
  ],
};

it('should match Snapshot', () => {
  const component = shallow(
    <CityNav {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should render the number of cities', () => {
  const component = shallow(
    <CityNav {...defaultProps} />
  );

  expect(component.find('.cityCount').text()).toBe('2');
});
