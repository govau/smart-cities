import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import {
  CARD_SIZES,
  INDICATOR_CARD_TYPES,
} from '../../constants';

const defaultProps = {
  size: CARD_SIZES.LARGE,
  type: INDICATOR_CARD_TYPES.INDICATOR,
  color: '#fff',
};

it('should match Snapshot', () => {
  const component =  shallow(
    <Card {...defaultProps}>
      <div>Render me</div>
    </Card>
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should apply the correct size class', () => {
  const component =  shallow(
    <Card
      {...defaultProps}
      size={CARD_SIZES.SMALL}
    >
      <div>Render me</div>
    </Card>
  );

  expect(component.hasClass('card__small')).toBe(true);
});

it('should apply the correct color', () => {
  const component =  shallow(
    <Card
      {...defaultProps}
      color="#a11"
    >
      <div>Render me</div>
    </Card>
  );

  const componentStyle = component.prop('style');
  expect(componentStyle.borderBottomColor).toBe('#a11');
});

it('should apply the category class when the type is category', () => {
  const component =  shallow(
    <Card
      {...defaultProps}
      type={INDICATOR_CARD_TYPES.CATEGORY}
    >
      <div>Render me</div>
    </Card>
  );

  expect(component.hasClass('card__category')).toBe(true);
});
