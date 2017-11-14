import React from 'react';
import { shallow } from 'enzyme';
import Portal from './Portal';

it('should match Snapshot', () => {
  const component = shallow(
    <Portal>Hi</Portal>
  );

  expect(component.debug()).toMatchSnapshot();
});
