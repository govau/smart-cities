import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import HamburgerButton from './HamburgerButton';

it('should render consistently', () => {
  const tree = renderer.create(
    <HamburgerButton onClick={() => {}}/>
  );

  expect(tree.toJSON()).toMatchSnapshot();
});

it('should call onClick when clicked', () => {
  const onClickMock = jest.fn();

  const tree = shallow(
    <HamburgerButton onClick={onClickMock}/>
  );

  tree.find('button').simulate('click');

  expect(onClickMock).toHaveBeenCalledTimes(1);
});
