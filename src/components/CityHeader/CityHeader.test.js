import React from 'react';
import { shallow } from 'enzyme';
import CityHeader from './CityHeader';

const defaultProps = {
  cityName: 'Greater perth',
  categoryColorName: 'jobs',
};

it('should match Snapshot', () => {
  const component = shallow(
    <CityHeader {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
