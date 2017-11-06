import React from 'react';
import { shallow } from 'enzyme';
import AboutTooltip from './AboutTooltip';

const defaultProps = {
  text: 'This is the content of the tooltip',
};

it('should match Snapshot', () => {
  const component = shallow(
    <AboutTooltip {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should pass text to the tooltip component', () => {
  const component = shallow(
    <AboutTooltip text="the description" />
  );

  const tooltipProps = component.find('Tooltip').props();

  expect(tooltipProps).toEqual(expect.objectContaining({
    text: 'the description',
  }));
});
