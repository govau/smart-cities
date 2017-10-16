import React from 'react';
import { shallow } from 'enzyme';
import CityOverview from './CityOverview';

jest.mock('../../OverviewSection/OverviewSection', () => 'OverviewSection');

const defaultProps = {
  city: {
    name: 'Perth',
    id: 'perth',
  },
};

it('should match Snapshot', () => {
  const component = shallow(
    <CityOverview {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
