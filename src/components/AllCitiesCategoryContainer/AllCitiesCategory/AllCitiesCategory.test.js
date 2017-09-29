import React from 'react';
import { shallow } from 'enzyme';
import AllCitiesCategory from './AllCitiesCategory';

const defaultProps = {
  category: {
    name: 'Mock category',
    colorName: 'jobs',
    id: 'mock',
  },
  cities: [
    {
      name: 'Perth',
      indices: {}
    },
    {
      name: 'Sydney',
      indices: {}
    },
  ],
};

it('should match Snapshot', () => {
  const component = shallow(
    <AllCitiesCategory {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
