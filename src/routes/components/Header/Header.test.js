import React from 'react';
import renderer from 'react-test-renderer';
import Header from './Header';

it('should match Snapshot', () => {
  const renderedValue =  renderer.create(
    <Header openNav={() => {}}/>
  ).toJSON();
  expect(renderedValue).toMatchSnapshot();
});
