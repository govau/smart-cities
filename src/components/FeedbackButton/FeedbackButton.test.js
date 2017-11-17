import React from 'react';
import { shallow } from 'enzyme';
import FeedbackButton from './FeedbackButton';

it('should match snapshot', () => {
  const component = shallow(
    <FeedbackButton />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should dim when required', () => {
  const component = shallow(
    <FeedbackButton dimmed />
  );

  const button = component.find('.button');
  expect(button.hasClass('dimmed')).toBe(true);
});

it('should not dim when not required', () => {
  const component = shallow(
    <FeedbackButton />
  );

  const button = component.find('.button');
  expect(button.hasClass('dimmed')).toBe(false);
});
