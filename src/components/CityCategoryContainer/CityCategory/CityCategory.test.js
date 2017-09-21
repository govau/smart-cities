import React from 'react';
import { shallow } from 'enzyme';
import CityCategory from './CityCategory';

const defaultProps = {
  category: {
    name: 'Mock category',
    id: 'mock',
  },
  city: {
    name: 'Perth',
    id: 'perth',
  },
};

it('should match Snapshot', () => {
  const component = shallow(
    <CityCategory {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
