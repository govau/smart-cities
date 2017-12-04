import React from 'react';
import { shallow } from 'enzyme';
import PageBanner from './PageBanner';

jest.mock('../IndicatorCard/IndicatorCard', () => 'IndicatorCard');

const defaultProps = {
  colorName: 'jobs',
  description: 'This is the mock category',
  indicatorId: 'population',
  title: 'Banner title',
  cities: [
    {
      id: 'perth',
      name: 'Perth',
      indicators: {
        population: 77,
      }
    },
    {
      id: 'sydney',
      name: 'Sydney',
      indicators: {
        population: 23,
      }
    },
  ],
};

it('should match Snapshot', () => {
  const component = shallow(
    <PageBanner {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should set the background color', () => {
  const component = shallow(
    <PageBanner {...defaultProps} />
  );

  const componentStyle = component.find('div').at(0).prop('style');
  // note, here the color is the string 'JOBS_020' because of the way
  // styles are imported during tests, but in reality
  // this will be the hex color
  expect(componentStyle.backgroundColor).toBe('JOBS_020');
});
