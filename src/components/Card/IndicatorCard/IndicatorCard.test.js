import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import IndicatorCard from './IndicatorCard';
import { CARD_SIZES } from '../../../constants';

jest.mock('../../IndicatorTypeMark/IndicatorTypeMark', () => 'IndicatorTypeMark');

const defaultProps = {
  value: 77,
  colorName: 'jobs',
  indicator: {
    name: 'The population growth',
    cardPrefix: 'The',
    cardSuffix: 'per annum',
    format: '0[.]0%',
    contextual: false,
  },
  color: '#fff',
};

it('should match Snapshot', () => {
  const component =  renderer.create(<IndicatorCard {...defaultProps} />);
  expect(component.toJSON()).toMatchSnapshot();
});

it('should apply the correct size class', () => {
  const component =  shallow(
    <IndicatorCard
      {...defaultProps}
      size={CARD_SIZES.LARGE}
    />
  );

  expect(component.hasClass('wrapper__large')).toBe(true);
});

it('should handle an indicator being passed as a string', () => {
  const component =  shallow(
    <IndicatorCard
      {...defaultProps}
      indicator="population"
    />
  );

  expect(component.find('.header').text()).toBe('The population');
});

it('should render no prefix or suffix when none are available', () => {
  const component =  shallow(
    <IndicatorCard
      {...defaultProps}
      indicator={{
        name: 'The number of cats',
        cardPrefix: '',
        cardSuffix: '',
        format: '0[.]0',
        contextual: false,
      }}
    />
  );

  expect(component.find('.prefix').length).toBe(0);
  expect(component.find('.suffix').length).toBe(0);
});

it('should render the format prefix', () => {
  const component =  shallow(
    <IndicatorCard
      {...defaultProps}
      indicator={{
        name: 'The cost of things',
        cardPrefix: '',
        cardSuffix: '',
        format: '$0[.]0',
        contextual: false,
      }}
    />
  );

  expect(component.find('.prefix').text()).toBe('$');
});

it('should render the card prefix', () => {
  const component =  shallow(
    <IndicatorCard
      {...defaultProps}
      indicator={{
        name: 'The cost of things',
        cardPrefix: 'AUD ',
        cardSuffix: '',
        format: '$0[.]0',
        contextual: false,
      }}
    />
  );

  expect(component.find('.prefix').text()).toBe('AUD $');
});

it('should render the format suffix', () => {
  const component =  shallow(
    <IndicatorCard
      {...defaultProps}
      indicator={{
        name: 'Population growth',
        cardPrefix: '',
        cardSuffix: '',
        format: '0[.]0%',
        contextual: false,
      }}
    />
  );

  expect(component.find('.suffix').text()).toBe('%');
});

it('should render the card suffix', () => {
  const component =  shallow(
    <IndicatorCard
      {...defaultProps}
      indicator={{
        name: 'Population growth',
        cardPrefix: '',
        cardSuffix: '/year',
        format: '0[.]0%',
        contextual: false,
      }}
    />
  );

  expect(component.find('.suffix').text()).toBe('%/year');
});

it('should render an IndicatorTypeMark if the indicator is not contextual', () => {
  const component =  shallow(
    <IndicatorCard
      {...defaultProps}
      indicator={{
        name: 'Population growth',
        cardPrefix: '',
        cardSuffix: '/year',
        format: '0[.]0%',
        contextual: false,
      }}
    />
  );

  expect(component.find('IndicatorTypeMark').length).toBe(1);
});

it('should not render an IndicatorTypeMark if the indicator is contextual', () => {
  const component =  shallow(
    <IndicatorCard
      {...defaultProps}
      indicator={{
        name: 'Population growth',
        cardPrefix: '',
        cardSuffix: '/year',
        format: '0[.]0%',
        contextual: true,
      }}
    />
  );

  expect(component.find('IndicatorTypeMark').length).toBe(0);
});
