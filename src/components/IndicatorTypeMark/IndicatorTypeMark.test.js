import React from 'react';
import { shallow } from 'enzyme';
import IndicatorTypeMark from './IndicatorTypeMark';

const defaultProps = {
  colorName: 'jobs',
  size: 'LARGE',
};

it('should match Snapshot', () => {
  const component = shallow(
    <IndicatorTypeMark {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should show a filled background and white P on category pages', () => {
  const component = shallow(
    <IndicatorTypeMark
      {...defaultProps}
      isCategoryPage
    />
  );

  const style = component.find('div').prop('style');
  expect(style.background).toBe('JOBS_900');
  expect(style.border).toBeUndefined();
  expect(style.color).toBe('WHITE');
});

it('should show a stroke and grey P on overview page when small', () => {
  const component = shallow(
    <IndicatorTypeMark
      {...defaultProps}
      size="SMALL"
    />
  );

  const style = component.find('div').prop('style');
  expect(style.background).toBeUndefined();
  expect(style.border).toBe('1px solid JOBS_900');
  expect(style.color).toBe('GREY_700');
});

it('should show a stroke and colored P on overview page when small', () => {
  const component = shallow(
    <IndicatorTypeMark
      {...defaultProps}
      size="LARGE"
    />
  );

  const style = component.find('div').prop('style');
  expect(style.background).toBeUndefined();
  expect(style.border).toBe('1px solid JOBS_900');
  expect(style.color).toBe('JOBS_900');
});
