import React from 'react';
import { shallow } from 'enzyme';
import CityHeader from './CityHeader';

jest.mock('../Icon/Icon', () => '../Icon/Icon');

const defaultProps = {
  cityName: 'Greater perth',
  categoryColorName: 'jobs',
  cityId: 'greater-perth',
};

it('should match Snapshot', () => {
  const component = shallow(
    <CityHeader {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should add an image with the city id', () => {
  const component = shallow(
    <CityHeader {...defaultProps} />
  );

  expect(component.find('.photo').prop('src')).toBe('/images/greater-perth.jpg');
});
