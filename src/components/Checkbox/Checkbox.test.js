import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from './Checkbox';

const onChangeMock = jest.fn();

const defaultProps = {
  id: 'the-id',
  label: 'The checkbox label',
  onChange: onChangeMock,
};

it('should match Snapshot', () => {
  const component = shallow(
    <Checkbox {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should apply the id to the input and the label', () => {
  const component = shallow(
    <Checkbox {...defaultProps} />
  );

  expect(component.find('.input').prop('id')).toBe('the-id-checkbox');
  expect(component.find('.label').prop('htmlFor')).toBe('the-id-checkbox');
});

it('applies the passed in color to the checkbox', () => {
  const component = shallow(
    <Checkbox
      {...defaultProps}
      checkedBoxColor="hotpink"
    />
  );

  expect(component.find('.label .checkbox').prop('style').color).toBe('hotpink');
});

it('calls onChange when changed', () => {
  const component = shallow(
    <Checkbox {...defaultProps} />
  );

  component.find('.input').simulate('change');

  expect(onChangeMock).toHaveBeenCalledTimes(1);
});
