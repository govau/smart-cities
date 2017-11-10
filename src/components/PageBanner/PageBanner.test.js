import React from 'react';
import { shallow } from 'enzyme';
import PageBanner from './PageBanner';

jest.mock('../IndicatorCard/IndicatorCard', () => 'IndicatorCard');
jest.mock('../PageLegend/PageLegend', () => 'PageLegend');

const defaultProps = {
  colorName: 'jobs',
  description: 'This is the mock category',
  indicator: 'population',
  title: 'Banner title',
  cities: [
    {
      id: 'perth',
      name: 'Perth',
      indices: {
        population: 77,
      }
    },
    {
      id: 'sydney',
      name: 'Sydney',
      indices: {
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

it('should get the min and max values', () => {
  const component = shallow(
    <PageBanner {...defaultProps} />
  );

  expect(component.find('IndicatorCard').prop('value')).toEqual([23, 77]);
});

it('should show data for a single city', () => {
  const component = shallow(
    <PageBanner
      {...defaultProps}
      cities={undefined}
      city={{
        id: 'perth',
        name: 'Perth',
        indices: {
          population: 77,
        },
      }}
    />
  );

  expect(component.find('IndicatorCard').prop('value')).toBe(77);
});
