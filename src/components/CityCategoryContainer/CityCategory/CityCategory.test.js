import React from 'react';
import { shallow } from 'enzyme';
import CityCategory from './CityCategory';

const defaultProps = {
  category: {
    name: 'Mock category',
    colorName: 'jobs',
    id: 'mock',
  },
  city: {
    name: 'Perth',
    id: 'perth',
  },
  cities: [
    {
      id: 'perth',
      name: 'Perth',
    },
    {
      id: 'sydney',
      name: 'Sydney',
    },
    {
      id: 'melbourne',
      name: 'Melbourne',
    },
  ],
  toggleCitySelected: () => {},
};

it('should match Snapshot', () => {
  const component = shallow(
    <CityCategory {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
