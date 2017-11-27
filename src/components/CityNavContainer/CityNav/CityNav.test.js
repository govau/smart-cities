import React from 'react';
import { shallow } from 'enzyme';
import CityNav from './CityNav';

jest.mock('../../Pill/Pill', () => 'Pill');

const defaultProps = {
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
