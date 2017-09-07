import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

it('should match Snapshot', () => {
  const component = renderer.create(
    <Header openNav={() => {}}/>
  );

  expect(component.toJSON()).toMatchSnapshot();
});
