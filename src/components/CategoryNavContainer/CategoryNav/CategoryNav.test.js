import React from 'react';
import { shallow } from 'enzyme';
import CategoryNav from './CategoryNav';

const defaultProps = {
  cityId: 'mock',
  categories: [
    {
      name: 'Perth',
      id: 'perth',
    },
    {
      name: 'Sydney',
      id: 'sydney',
    },
  ],
};

it('should match Snapshot', () => {
  const component = shallow(
    <CategoryNav {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
