import React from 'react';
import renderer from 'react-test-renderer';
import CategoryCard from './CategoryCard';

it('should match Snapshot', () => {
  const component =  renderer.create(<CategoryCard />).toJSON();
  expect(component).toMatchSnapshot();
});
