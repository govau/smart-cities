import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import HamburgerButton from './HamburgerButton';

const onClickMock = jest.fn();

const defaultProps = {
  onClick: onClickMock,
};

it('should render consistently', () => {
  const component = renderer.create(
    <HamburgerButton {...defaultProps} />
  );

  expect(component.toJSON()).toMatchSnapshot();
});

it('should call onClick when clicked', () => {
  const component = shallow(
    <HamburgerButton {...defaultProps} />
  );

  component.find('button').simulate('click');

  expect(onClickMock).toHaveBeenCalledTimes(1);
});
