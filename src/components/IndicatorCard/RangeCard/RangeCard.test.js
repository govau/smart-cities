import React from 'react';
import { shallow } from 'enzyme';
import RangeCard from './RangeCard';
import { CARD_SIZES } from '../../../constants';

jest.mock('../../IndicatorIcon/IndicatorIcon', () => 'IndicatorIcon');

const defaultProps = {
  colorName: 'jobs',
  cities: [
    {
      id: 'perth',
      name: 'Perth',
      indicators: {
        growthRate: 0.77,
      },
    },
    {
      id: 'sydney',
      name: 'Sydney',
      indicators: {
        growthRate: 0.22,
      },
    },
    {
      id: 'melbourne',
      name: 'Melbourne',
      indicators: {
        growthRate: 0.33,
      },
    },
  ],
  indicator: {
    id: 'growthRate',
    name: 'The population growth',
    format: '0[.]0%',
    contextual: false,
  },
  size: CARD_SIZES.LARGE,
};

it('should match Snapshot', () => {
  const component = shallow(<RangeCard {...defaultProps} />);
  expect(component.debug()).toMatchSnapshot();
});

it('should apply the largeCard class', () => {
  const component = shallow(
    <RangeCard
      {...defaultProps}
      size={CARD_SIZES.LARGE}
    />
  );

  expect(component.hasClass('largeCard')).toBe(true);
});

it('should apply the smallCard class', () => {
  const component = shallow(
    <RangeCard
      {...defaultProps}
      size={CARD_SIZES.SMALL}
    />
  );

  expect(component.hasClass('smallCard')).toBe(true);
});

it('should render the correct min and max info for specific cities', () => {
  const component = shallow(
    <RangeCard
      {...defaultProps}
      cities={[
        {
          id: 'perth',
          name: 'Perth',
          indicators: {
            growthRate: 0.77,
          },
        },
        {
          id: 'sydney',
          name: 'Sydney',
          indicators: {
            growthRate: 0.22,
          },
        },
        {
          id: 'melbourne',
          name: 'Melbourne',
          indicators: {
            growthRate: 0.33,
          },
        },
      ]}
    />
  );

  // min
  expect(component.find('.footerCity').at(0).text()).toBe('Sydney');
  expect(component.find('.footerValue').at(0).text()).toBe('22%');

  // max
  expect(component.find('.footerCity').at(1).text()).toBe('Perth');
  expect(component.find('.footerValue').at(1).text()).toBe('77%');
});

it('should handle multiple cities with the sane min and max values', () => {
  const component = shallow(
    <RangeCard
      {...defaultProps}
      cities={[
        {
          id: 'perth',
          name: 'Perth',
          indicators: {
            growthRate: 0.77,
          },
        },
        {
          id: 'act',
          name: 'Canberra',
          indicators: {
            growthRate: 0.22,
          },
        },
        {
          id: 'geelong',
          name: 'Geelong',
          indicators: {
            growthRate: 0.77,
          },
        },
        {
          id: 'sydney',
          name: 'Sydney',
          indicators: {
            growthRate: 0.22,
          },
        },
        {
          id: 'melbourne',
          name: 'Melbourne',
          indicators: {
            growthRate: 0.22,
          },
        },
      ]}
    />
  );

  // min
  expect(component.find('.footerCity').at(0).text()).toBe('3 cities');
  expect(component.find('.footerValue').at(0).text()).toBe('22%');

  // max
  expect(component.find('.footerCity').at(1).text()).toBe('2 cities');
  expect(component.find('.footerValue').at(1).text()).toBe('77%');
});

it('should render the correct number of bars', () => {
  const component = shallow(
    <RangeCard
      {...defaultProps}
      cities={[
        {
          id: 'perth',
          name: 'Perth',
          indicators: {
            growthRate: 0.77,
          },
        },
        {
          id: 'act',
          name: 'Canberra',
          indicators: {
            growthRate: 0.22,
          },
        },
        {
          id: 'geelong',
          name: 'Geelong',
          indicators: {
            growthRate: 0.77,
          },
        },
        {
          id: 'sydney',
          name: 'Sydney',
          indicators: {
            growthRate: 0.22,
          },
        },
        {
          id: 'melbourne',
          name: 'Melbourne',
          indicators: {
            growthRate: 0.22,
          },
        },
      ]}
    />
  );

  expect(component.find('.bar').length).toBe(5);
});

it('should exclude cities with no data', () => {
  const component = shallow(
    <RangeCard
      {...defaultProps}
      cities={[
        {
          id: 'perth',
          name: 'Perth',
          indicators: {}, // I have no data
        },
        {
          id: 'act',
          name: 'Canberra',
          indicators: {
            growthRate: 0.22,
          },
        },
        {
          id: 'geelong',
          name: 'Geelong',
          indicators: {
            growthRate: 0.77,
          },
        },
        {
          id: 'sydney',
          name: 'Sydney',
          indicators: {
            growthRate: 0.22,
          },
        },
        {
          id: 'melbourne',
          name: 'Melbourne',
          indicators: {
            growthRate: 0.22,
          },
        },
      ]}
    />
  );

  expect(component.find('.bar').length).toBe(4); // only 4, perth was hidden
});
