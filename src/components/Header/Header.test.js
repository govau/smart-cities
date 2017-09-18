import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

it('should match Snapshot', () => {
  const component = renderer.create(
    <Header />
  );

  expect(component.toJSON()).toMatchSnapshot();
});
