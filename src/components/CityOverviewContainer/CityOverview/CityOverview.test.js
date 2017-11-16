import React from 'react';
import { shallow } from 'enzyme';
import CityOverview from './CityOverview';

jest.mock('../../CategoryOverviews/CategoryOverviews', () => 'CategoryOverviews');
jest.mock('../../PageBanner/PageBanner', () => 'PageBanner');

const defaultProps = {
  city: {
    name: 'Perth',
    description: 'Perth',
    id: 'perth',
  },
};

it('should match Snapshot', () => {
  const component = shallow(
    <CityOverview {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});
