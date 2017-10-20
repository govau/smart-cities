import React from 'react';
import { shallow } from 'enzyme';
import CityHeader from './CityHeader';

jest.mock('../Icon/Icon', () => '../Icon/Icon');

const defaultProps = {
  cityName: 'Greater perth',
  categoryColorName: 'jobs',
  categoryIconId: 'infrastructureGettingToWork',
};

it('should match Snapshot', () => {
  const component = shallow(
    <CityHeader {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
