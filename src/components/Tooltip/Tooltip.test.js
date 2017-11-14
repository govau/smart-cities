import React from 'react';
import { shallow } from 'enzyme';
import Tooltip from './Tooltip';

jest.mock('../Portal/Portal', () => 'Portal');

const defaultProps = {
  text: 'The text',
  borderColor: 'red',
};

it('should match Snapshot', () => {
  const component = shallow(
    <Tooltip {...defaultProps}>
      Hover here for help
    </Tooltip>
  );

  expect(component.debug()).toMatchSnapshot();
});

describe('when hovering over the target, the tooltip should show', () => {
  const component = shallow(
    <Tooltip {...defaultProps}>
      Hover here for help
    </Tooltip>
  );

  const testScenarios = [
    {
      name: 'below the target, center aligned',
      inputDimensions: {
        clientWidth: 2000,
        innerHeight: 1000,
        left: 500,
        top: 200,
        width: 300,
        height: 50,
      },
      expectedOutput: {
        left: 522,
        top: 258,
      },
    },
    {
      name: 'above the target, center aligned',
      inputDimensions: {
        clientWidth: 2000,
        innerHeight: 1000,
        left: 500,
        top: 900, // bottom half of screen
        width: 300,
        height: 50,
      },
      expectedOutput: {
        left: 522,
        bottom: 108,
      },
    },
    {
      name: 'shifted right to stay on the page',
      inputDimensions: {
        clientWidth: 2000,
        innerHeight: 1000,
        left: 0,
        top: 0,
        width: 100, // so the center is only 50 from the left
        height: 100,
      },
      expectedOutput: {
        left: 8, // up against the left side, with a bit of padding
        top: 108,
      },
    },
    {
      name: 'shifted left to stay on the page',
      inputDimensions: {
        clientWidth: 2000,
        innerHeight: 1000,
        left: 1900, // so the target is up against the right side of the page
        top: 0,
        width: 100,
        height: 100,
      },
      expectedOutput: {
        left: 1736, // up against the right side, with a bit of padding (2000 - (256 + 8))
        top: 108,
      },
    },
  ];

  // here we loop over the scenarios, we don't need to re-mount the component each time
  // because the dimensions are calculated on hover
  testScenarios.forEach((scenario) => {
    it(scenario.name, () => {
      window.innerHeight = scenario.inputDimensions.innerHeight;
      document.body.clientWidth = scenario.inputDimensions.clientWidth;
      // there are no regs with shallow() render, so we manually mock out this.el
      // (enzyme.mount doesn't work with Portals)
      component.instance().el = {
        getBoundingClientRect: () => ({
          left: scenario.inputDimensions.left,
          top: scenario.inputDimensions.top,
          width: scenario.inputDimensions.width,
          height: scenario.inputDimensions.height,
        })
      };

      component.find('.tooltipTarget').simulate('mouseOver');

      const tooltipStyle = component.find('.tooltipWrapper').prop('style');
      expect(tooltipStyle).toEqual(expect.objectContaining(scenario.expectedOutput));
    });
  });
});

it('should hide/show the tooltip on mouseOver/mouseOut', () => {
  const component = shallow(
    <Tooltip {...defaultProps}>
      Hover here for help
    </Tooltip>
  );

  // enzyme.shallow doesn't do refs, so mock this out
  component.instance().el = {
    getBoundingClientRect: () => ({})
  };

  expect(component.find('Portal').length).toBe(0);

  component.find('.tooltipTarget').simulate('mouseOver');

  expect(component.find('Portal').length).toBe(1);

  component.find('.tooltipTarget').simulate('mouseOut');

  expect(component.find('Portal').length).toBe(0);
});
