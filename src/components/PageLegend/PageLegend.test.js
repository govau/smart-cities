import React from 'react';
import { shallow } from 'enzyme';
import PageLegend from './PageLegend';

jest.mock('../Icon/Icon', () => 'Icon');
jest.mock('../Tooltip/Tooltip', () => 'Tooltip');

const defaultProps = {
  colorName: 'jobs',
};

it('should match Snapshot', () => {
  const component = shallow(
    <PageLegend {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should show the "performance indicators" text when not on the context page', () => {
  const component = shallow(
    <PageLegend
      {...defaultProps}
      isContextPage={false}
    />
  );

  expect(component.find('.indicatorTypesWrapper').length).toBe(1);
});

it('should not show the "performance indicators" text when on the context page', () => {
  const component = shallow(
    <PageLegend
      {...defaultProps}
      isContextPage
    />
  );

  expect(component.find('.indicatorTypesWrapper').length).toBe(0);
});

it('should show the range icons on the all cities pages', () => {
  const component = shallow(
    <PageLegend
      {...defaultProps}
      isAllCitiesPage={true}
    />
  );

  expect(component.find('.rangeWrapper').length).toBe(1);
});

it('should not show the range icons on a city page', () => {
  const component = shallow(
    <PageLegend
      {...defaultProps}
      isAllCitiesPage={false}
    />
  );

  expect(component.find('.rangeWrapper').length).toBe(0);
});
