import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

const defaultProps = {
  href: 'https://www.example.com',
};

it('should match Snapshot', () => {
  const component = shallow(
    <Link {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should render the children', () => {
  const component = shallow(
    <Link {...defaultProps} >
      Example dot com
    </Link>
  );

  expect(component.text()).toBe('Example dot com');
});

it('should render the href as the text if no children are supplied', () => {
  const component = shallow(
    <Link {...defaultProps} />
  );

  expect(component.text()).toBe('https://www.example.com');
});

describe('when the external flag is not set', () => {
  it('should set no target', () => {
    const component = shallow(
      <Link  {...defaultProps} />
    );

    expect(component.prop('target')).toBe(null)
  });

  it('should add rel noopener noreferrer', () => {
    const component = shallow(
      <Link  {...defaultProps} />
    );

    expect(component.prop('rel')).toBe(null)
  });
});

describe('when the external flag is true', () => {
  it('should add target="_blank', () => {
    const component = shallow(
      <Link  {...defaultProps} external />
    );

    expect(component.prop('target')).toBe('_blank')
  });

  it('should add rel noopener noreferrer', () => {
    const component = shallow(
      <Link  {...defaultProps} external />
    );

    expect(component.prop('rel')).toBe('noopener noreferrer')
  });
});
