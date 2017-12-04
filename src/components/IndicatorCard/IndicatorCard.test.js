import React from 'react';
import { shallow } from 'enzyme';
import IndicatorCard from './IndicatorCard';

jest.mock('./RangeCard/RangeCard', () => 'RangeCard');
jest.mock('./NumberCard/NumberCard', () => 'NumberCard');

const defaultProps = {
  colorName: 'jobs',
  indicatorId: 'population',
  color: '#fff',
};

it('should match Snapshot', () => {
  const component = shallow(<IndicatorCard {...defaultProps} />);
  expect(component.debug()).toMatchSnapshot();
});

it('should pass an indicator object with id to the child card', () => {
  const component = shallow(
    <IndicatorCard {...defaultProps} />
  );

  expect(component.prop('indicator')).toEqual(expect.objectContaining({
    id: 'population',
    name: 'Population',
  }));
});

it('should render a NumberCard when the city prop is present', () => {
  const component = shallow(
    <IndicatorCard
      {...defaultProps}
      city={{
        id: 'perth',
        indicators: {},
        name: 'Perth',
      }}
    />
  );

  expect(component.is('NumberCard')).toBe(true);
});

it('should render a RangeCard when the city prop is not present', () => {
  const component = shallow(
    <IndicatorCard
      {...defaultProps}
      city={null}
    />
  );

  expect(component.is('RangeCard')).toBe(true);
});
