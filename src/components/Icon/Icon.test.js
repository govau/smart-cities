import React from 'react';
import renderer from 'react-test-renderer';
import Icon from './Icon';

const defaultProps = {
  icon: 'questionMark',
};

it('should match Snapshot', () => {
  const renderedValue = renderer.create(<Icon {...defaultProps} />).toJSON();
  expect(renderedValue).toMatchSnapshot();
});
