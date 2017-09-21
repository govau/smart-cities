import React from 'react';
import { shallow } from 'enzyme';
import AllCitiesCategory from './AllCitiesCategory';

const defaultProps = {
  category: {
    name: 'Mock category',
    id: 'mock',
  },
  cities: [
    {
      name: 'Perth',
    },
    {
      name: 'Sydney',
    },
  ],
};

it('should match Snapshot', () => {
  const component = shallow(
    <AllCitiesCategory {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
