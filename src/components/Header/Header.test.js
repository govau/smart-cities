import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

jest.mock('../HamburgerButton/HamburgerButton', () => 'HamburgerButton');

const openNavMock = jest.fn();

const defaultProps = {
  cityId: 'perth',
  categoryId: 'jobs',
  openNav: openNavMock,
};

it('should match Snapshot', () => {
  const component = shallow(
    <Header {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should open the nav when the hamburger is clicked', () => {
  const component = shallow(
    <Header {...defaultProps} />
  );

  component.find('HamburgerButton').simulate('click');

  expect(openNavMock).toHaveBeenCalledTimes(1);
});
