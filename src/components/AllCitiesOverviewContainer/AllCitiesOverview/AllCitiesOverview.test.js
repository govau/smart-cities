import React from 'react';
import { shallow } from 'enzyme';
import AllCitiesOverview from './AllCitiesOverview';

jest.mock('../../CategoryOverviews/CategoryOverviews', () => 'CategoryOverviews');
jest.mock('../../Icon/Icon', () => 'Icon');

const defaultProps = {
  cities: [
    {
      id: 'perth',
      indices: {},
    },
    {
      id: 'sydney',
      indices: {},
    },
  ],
};

it('should match Snapshot', () => {
  const component = shallow(
    <AllCitiesOverview {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
