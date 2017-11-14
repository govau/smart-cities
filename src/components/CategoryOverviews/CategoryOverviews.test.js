import React from 'react';
import { shallow } from 'enzyme';
import CategoryOverviews from './CategoryOverviews';
import { CATEGORIES } from '../../constants';

jest.mock('../CategoryOverview/CategoryOverview', () => 'CategoryOverview');

const defaultProps = {
  city: {
    id: 'perth',
    indices: {}
  },
};

it('should match Snapshot', () => {
  const component = shallow(
    <CategoryOverviews {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should render the correct number of categories', () => {
  const component = shallow(
    <CategoryOverviews {...defaultProps} />
  );

  expect(component.find('CategoryOverview').length).toBe(CATEGORIES.length)
});
