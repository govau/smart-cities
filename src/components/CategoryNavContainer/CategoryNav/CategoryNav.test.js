import React from 'react';
import { shallow } from 'enzyme';
import CategoryNav from './CategoryNav';
import {
  CATEGORY_IDS,
  NO_CITY,
} from '../../../constants';

jest.mock('../../Pill/Pill', () => 'Pill');
jest.mock('react-router-dom', () => ({
  NavLink: jest.fn(),
}));

const mockElement = {
  offsetLeft: 200,
  parentElement: {
    scrollLeft: 0,
  },
};

// mock this out so that componentDidMount returns the mock element
document.querySelector = jest.fn(() => mockElement);

const defaultProps = {
  cityId: 'perth',
  categoryId: CATEGORY_IDS.OVERVIEW,
  categories: [
    {
      name: 'Perth',
      id: 'perth',
    },
    {
      name: 'Sydney',
      id: 'sydney',
    },
  ],
};

it('should match Snapshot', () => {
  const component = shallow(
    <CategoryNav {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should add a modifier class on the all cities overview page', () => {
  const component = shallow(
    <CategoryNav
      {...defaultProps}
      cityId={NO_CITY}
    />
  );

  expect(component.find('.wrapper').hasClass('wrapper__overview')).toBe(true);
});

it('should not add a modifier class on a city overview page', () => {
  const component = shallow(
    <CategoryNav
      {...defaultProps}
      city="some city"
    />
  );

  expect(component.find('.wrapper').hasClass('wrapper__overview')).toBe(false);
});

it('should scroll the nav item into view when clicked', () => {
  const component = shallow(
    <CategoryNav {...defaultProps} />
  );

  const eventMock = {
    target: {
      parentElement: mockElement,
    },
  };

  component.find('.link').at(2).simulate('click', eventMock);

  expect(mockElement.parentElement.scrollLeft).toBe(mockElement.offsetLeft - 40);
});
