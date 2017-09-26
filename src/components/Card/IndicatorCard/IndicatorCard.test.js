import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import IndicatorCard from './IndicatorCard';
import { CARD_SIZES } from '../../../constants';

it('should match Snapshot', () => {
  const component =  renderer.create(<IndicatorCard />).toJSON();
  expect(component).toMatchSnapshot();
});

it('should apply the correct size class', () => {
  const component =  shallow(
    <IndicatorCard
      size={CARD_SIZES.LARGE}
    />
  );

  expect(component.hasClass('wrapper__large')).toBe(true);
});

it('should not render a prefix if none is passed in', () => {
  const component =  shallow(
    <IndicatorCard />
  );

  expect(component.find('.prefix').length).toBe(0);
});

it('should render a prefix if one is passed in', () => {
  const component =  shallow(
    <IndicatorCard
      prefix="$"
    />
  );

  expect(component.find('.prefix').text()).toBe('$');
});

it('should not render a suffix if none is passed in', () => {
  const component =  shallow(
    <IndicatorCard />
  );

  expect(component.find('.suffix').length).toBe(0);
});

it('should render a suffix if one is passed in', () => {
  const component =  shallow(
    <IndicatorCard
      suffix="%"
    />
  );

  expect(component.find('.suffix').text()).toBe('%');
});
