import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

const defaultProps = {
  text: 'This is the content of the tooltip',
};

it('should match Snapshot', () => {
  const component = shallow(
    <Link {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should add referrer when the target is _blank', () => {
  const component = shallow(
    <Link external />
  );

});
