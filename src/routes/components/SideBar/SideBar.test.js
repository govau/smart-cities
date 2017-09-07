import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import SideBar from './SideBar';

const closeNavMock = jest.fn();

const defaultProps = {
  closeNav: closeNavMock,
  isOpen: false,
};

it('should match Snapshot', () => {
  const component = renderer.create(
    <SideBar {...defaultProps} />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

it('should close the nav when the button is clicked', () => {
  const component = shallow(
    <SideBar {...defaultProps} />
  );

  component.find('button').simulate('click');

  expect(closeNavMock).toHaveBeenCalledTimes(1);
});
