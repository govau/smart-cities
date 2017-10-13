import React from 'react';
import { shallow } from 'enzyme';
import CategoryBanner from './CategoryBanner';

jest.mock('../Card/IndicatorCard/IndicatorCard', () => 'IndicatorCard');

const defaultProps = {
  category: {
    colorName: 'jobs',
    description: 'This is the mock category',
    heroIndicatorId: 'population',
    id: 'mock',
    name: 'Mock category',
  },
  cities: [
    {
      id: 'perth',
      name: 'Perth',
      indices: {}
    },
    {
      id: 'sydney',
      name: 'Sydney',
      indices: {}
    },
  ],
};

it('should match Snapshot', () => {
  const component = shallow(
    <CategoryBanner {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should set the background color', () => {
  const component = shallow(
    <CategoryBanner {...defaultProps} />
  );

  const componentStyle = component.find('div').at(0).prop('style');
  // note, here the color is the string 'JOBS_020' because of the way
  // styles are imported during tests, but in reality
  // this will be the hex color
  expect(componentStyle.backgroundColor).toBe('JOBS_020');
});
