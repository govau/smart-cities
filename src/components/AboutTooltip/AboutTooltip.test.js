import React from 'react';
import { shallow } from 'enzyme';
import AboutTooltip from './AboutTooltip';

const defaultProps = {
  description: 'This is the content of the tooltip',
};

it('should match Snapshot', () => {
  const component = shallow(
    <AboutTooltip {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should pass descriptions and position to the tooltip component', () => {
  const component = shallow(
    <AboutTooltip
      description="the description"
      position="right"
    />
  );

  const tooltipProps = component.find('Tooltip').props();

  expect(tooltipProps).toEqual(expect.objectContaining({
    description: 'the description',
    position: 'right',
  }));
});
