import React from 'react';
import { shallow } from 'enzyme';
import IndicatorIcon from './IndicatorIcon';
import { STRINGS } from '../../constants';

jest.mock('../Portal/Portal', () => 'Portal');

const defaultProps = {
  contextual: true,
};

it('should match Snapshot', () => {
  const component = shallow(<IndicatorIcon {...defaultProps} />);

  expect(component.debug()).toMatchSnapshot();
});

it('should render a contextualIndicator Icon if the indicator is contextual', () => {
  const component = shallow(
    <IndicatorIcon
      {...defaultProps}
      contextual
    />
  );

  expect(component.find('Tooltip').prop('text')).toBe(STRINGS.CONTEXTUAL_DEFINITION);
  expect(component.find('Icon').prop('icon')).toBe('contextualIndicator');
});

it('should render a performanceIndicator Icon if the indicator is not contextual', () => {
  const component = shallow(
    <IndicatorIcon
      {...defaultProps}
      contextual={false}
    />
  );

  expect(component.find('Tooltip').prop('text')).toBe(STRINGS.PERFORMANCE_DEFINITION);
  expect(component.find('Icon').prop('icon')).toBe('performanceIndicator');
});
