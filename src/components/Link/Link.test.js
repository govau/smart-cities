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
