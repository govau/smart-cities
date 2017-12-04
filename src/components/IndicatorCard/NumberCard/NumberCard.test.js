import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import NumberCard from './NumberCard';
import { CARD_SIZES } from '../../../constants';

jest.mock('../../IndicatorIcon/IndicatorIcon', () => 'IndicatorIcon');

const defaultProps = {
  city: {
    id: 'perth',
    indicators: {
      population: 10,
    },
    name: 'Perth',
  },
  colorName: 'jobs',
  indicator: {
    id: 'population',
    name: 'Population',
    cardPrefix: 'The',
    cardSuffix: 'per annum',
    format: '0[.]0%',
    contextual: false,
  },
  color: '#fff',
  size: CARD_SIZES.LARGE,
};

it('should match Snapshot', () => {
  const component = renderer.create(<NumberCard {...defaultProps} />);
  expect(component.toJSON()).toMatchSnapshot();
});

it('should apply the largeCard class', () => {
  const component = shallow(
    <NumberCard
      {...defaultProps}
      size={CARD_SIZES.LARGE}
    />
  );

  expect(component.hasClass('largeCard')).toBe(true);
});

it('should apply the smallCard class', () => {
  const component = shallow(
    <NumberCard
      {...defaultProps}
      size={CARD_SIZES.SMALL}
    />
  );

  expect(component.hasClass('smallCard')).toBe(true);
});

it('should show "No data" if there is no data', () => {
  const component = shallow(
    <NumberCard
      {...defaultProps}
      indicator={{
        id: 'activeJourneys', // the city in the test does not have data for this
        name: 'The number of something',
        cardPrefix: '',
        cardSuffix: '',
        format: '',
        contextual: false,
      }}
    />
  );

  expect(component.find('.number').text()).toBe('No data');
});

it('should render no prefix or suffix when none are available', () => {
  const component = shallow(
    <NumberCard
      {...defaultProps}
      indicator={{
        id: 'population',
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
  const component = shallow(
    <NumberCard
      {...defaultProps}
      indicator={{
        id: 'population',
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
  const component = shallow(
    <NumberCard
      {...defaultProps}
      indicator={{
        id: 'population',
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
  const component = shallow(
    <NumberCard
      {...defaultProps}
      indicator={{
        id: 'population',
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
  const component = shallow(
    <NumberCard
      {...defaultProps}
      indicator={{
        id: 'population',
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
