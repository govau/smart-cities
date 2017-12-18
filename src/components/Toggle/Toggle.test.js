import React from 'react';
import { shallow } from 'enzyme';
import Toggle from './Toggle';

const onChangeMock = jest.fn();

const defaultProps = {
  colorName: 'jobs',
  id: 'the-id',
  label: 'The toggle label',
  onChange: onChangeMock,
};

it('should match Snapshot', () => {
  const component = shallow(
    <Toggle {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should apply the id to the input and the label', () => {
  const component = shallow(
    <Toggle {...defaultProps} />
  );

  expect(component.find('.toggle').prop('htmlFor')).toBe('the-id-toggle');
  expect(component.find('.input').prop('id')).toBe('the-id-toggle');
});

it('applies the passed in color as a class', () => {
  const component = shallow(
    <Toggle {...defaultProps} />
  );

  expect(component.hasClass('jobs')).toBe(true);
});

it('calls onChange when changed', () => {
  const component = shallow(
    <Toggle {...defaultProps} />
  );

  component.find('.input').simulate('change', {
    target: {
      checked: true,
    },
  });

  expect(onChangeMock).toHaveBeenCalledTimes(1);
  expect(onChangeMock).toHaveBeenCalledWith(true);
});
