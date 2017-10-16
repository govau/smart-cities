import React from 'react';
import { shallow } from 'enzyme';
import AllCitiesOverview from './AllCitiesOverview';

jest.mock('../../OverviewSection/OverviewSection', () => 'OverviewSection');

const defaultProps = {
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
    <AllCitiesOverview {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
