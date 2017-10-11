import React from 'react';
import { shallow } from 'enzyme';
import CompareCities from './CompareCities';

jest.mock('../Checkbox/Checkbox', () => 'Checkbox');

const toggleCitySelectedMock = jest.fn();

const defaultProps = {
  city: {
    id: 'perth',
    name: 'Greater Perth',
  },
  cities: [
    {
      id: 'perth',
      name: 'Perth',
    },
    {
      id: 'sydney',
      name: 'Sydney',
    },
    {
      id: 'melbourne',
      name: 'Melbourne',
    },
  ],
  toggleCitySelected: toggleCitySelectedMock,
  category: {
    colorName: 'jobs',
  },
};

it('should match Snapshot', () => {
  const component = shallow(
    <CompareCities {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should render a checkbox for each city except the current one', () => {
  const component = shallow(
    <CompareCities {...defaultProps} />
  );

  expect(component.find('Checkbox').length).toBe(defaultProps.cities.length - 1);
});

it('should base the checkbox color on the category color', () => {
  const component = shallow(
    <CompareCities {...defaultProps} />
  );

  const firstCheckbox = component.find('Checkbox').at(0);

  expect(firstCheckbox.prop('checkedBoxColor')).toBe('JOBS_500');
});

it('should show the count of other cities in the title', () => {
  const component = shallow(
    <CompareCities {...defaultProps} />
  );

  const subTitle = component.find('.subTitle');

  expect(subTitle.text()).toBe(' across 2 other cities');
});
