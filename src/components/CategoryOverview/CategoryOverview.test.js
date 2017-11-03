import React from 'react';
import { shallow } from 'enzyme';
import cloneDeep from 'lodash/cloneDeep';
import CategoryOverview from './CategoryOverview';
import { CATEGORY_IDS } from '../../constants';

jest.mock('../Icon/Icon', () => 'Icon');
jest.mock('../Card/IndicatorCard/IndicatorCard', () => 'IndicatorCard');
jest.mock('../Pill/Pill', () => 'Pill');

const defaultProps = {
  category: {
    id: 'jobs',
    name: 'Jobs and Skills',
    shortDescription: 'The short description',
    colorName: 'jobs',
    overviewIndicatorIds: [
      'population'
    ],
    iconId: 'infrastructureGettingToWork',
    subCategories: [
      { name: 'Employment' },
      { name: 'Education' },
    ],
  },
  city: {
    id: 'perth',
    name: 'Perth',
    indices: {
      population: 77,
    }
  },
};

it('should match Snapshot', () => {
  const component = shallow(
    <CategoryOverview {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should render the sub categories', () => {
  const component = shallow(
    <CategoryOverview
      {...defaultProps}
    />
  );

  const subCategoryLinks = component.find('.subCategoryLink');

  expect(subCategoryLinks.at(0).text()).toBe('Employment');
  expect(subCategoryLinks.at(1).text()).toBe('Education');
});

describe('when rendering the "context" category', () => {
  const propsForContextCategory = cloneDeep(defaultProps);
  propsForContextCategory.category.id = CATEGORY_IDS.CONTEXT;
  propsForContextCategory.category.colorName = CATEGORY_IDS.CONTEXT;

  const component = shallow(
    <CategoryOverview
      {...propsForContextCategory}
    />
  );

  it('should apply a modifier class', () => {
    expect(component.find('.categoryWrapper').hasClass('category__context')).toBe(true);
  });

  it('should not render a category icon', () => {
    expect(component.find('.categoryIcon').length).toBe(0);
  });

  it('should render a solid arrow icon in the category link', () => {
    expect(component.find('.categoryLinkPill Icon').prop('icon')).toBe('rightArrowInCircle');
  });

  it('should render the appropriate background color', () => {
    expect(component.find('.categoryWrapper').prop('style').background).toBe('WHITE');
  });

  it('should render the appropriate category link style', () => {
    expect(component.find('.categoryLinkPill').prop('style')).toEqual({
      background: 'WHITE',
      border: '2px solid CONTEXT_500',
      color: 'GREY_700',
    });
  });
});

describe('when rendering a category other than "context"', () => {
  const component = shallow(
    <CategoryOverview
      {...defaultProps}
    />
  );

  it('should not apply a modifier class', () => {
    expect(component.find('.categoryWrapper').hasClass('category__context')).toBe(false);
  });

  it('should render a category icon', () => {
    expect(component.find('.categoryIcon').length).toBe(1);
    expect(component.find('.categoryIcon Icon').prop('icon')).toBe('infrastructureGettingToWork');
  });

  it('should render an inverted arrow icon in the category link', () => {
    expect(component.find('.categoryLinkPill Icon').prop('icon')).toBe('rightArrowInCircleInverted');
  });

  it('should render the appropriate background color', () => {
    expect(component.find('.categoryWrapper').prop('style').background).toBe('JOBS_040');
  });

  it('should render the appropriate category link style', () => {
    expect(component.find('.categoryLinkPill').prop('style')).toEqual({
      background: 'JOBS_500',
      border: '2px solid JOBS_500',
      color: 'WHITE',
    });
  });
});

describe('when an array of cities is passed in', () => {
  const propsWithCities = cloneDeep(defaultProps);
  delete propsWithCities.city;
  propsWithCities.cities = [
    {
      id: 'perth',
      name: 'Perth',
      indices: {
        population: 77,
      }
    },
    {
      id: 'sydney',
      name: 'Sydney',
      indices: {
        population: 23,
      }
    },
  ];

  const component = shallow(
    <CategoryOverview {...propsWithCities} />
  );

  it('should aggregate data for all cities', () => {
    expect(component.find('IndicatorCard').prop('value')).toEqual([23, 77]);
  });

  it('should create a link to the all cities category page', () => {
    expect(component.find('.categoryLinkWrapper').prop('to')).toBe('/all-cities/jobs');
  });

});

describe('when a single city is passed in', () => {
  const component = shallow(
    <CategoryOverview {...defaultProps} />
  );

  it('should aggregate data for all cities', () => {
    expect(component.find('IndicatorCard').prop('value')).toBe(77);
  });

  it('should create a link to the all cities category page', () => {
    expect(component.find('.categoryLinkWrapper').prop('to')).toBe('/perth/jobs');
  });
});
