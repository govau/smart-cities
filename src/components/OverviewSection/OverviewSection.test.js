import React from 'react';
import { shallow } from 'enzyme';
import OverviewSection from './OverviewSection';

jest.mock('../PageBanner/PageBanner', () => 'PageBanner');
jest.mock('../CategoryIndicator/CategoryIndicator', () => 'CategoryIndicator');
jest.mock('../../constants/index', () => ({
  CATEGORIES: [
    {
      id: 'cat-1',
      colorName: 'jobs',
    },
    {
      id: 'cat-2',
      colorName: 'cats',
    },
    {
      id: 'cat-3',
      colorName: 'dogs',
    },
  ],
  CATEGORY_IDS: {
    CONTEXT: 'context',
  },
  STRINGS: {
    OVERVIEW_DESCRIPTION: 'OVERVIEW_DESCRIPTION',
    OVERVIEW_TITLE: 'OVERVIEW_TITLE',
  }
}));

const defaultProps = {
  city: {
    description: 'The description',
    indices: {
      population: 77,
    },
    shortName: 'Perth',
  }
};

it('should match Snapshot', () => {
  const component = shallow(
    <OverviewSection {...defaultProps} />
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should render each of the categories', () => {
  const component = shallow(
    <OverviewSection {...defaultProps} />
  );

  expect(component.find('CategoryIndicator').length).toBe(3);
});

describe('when a single city is passed in', () => {
  const component = shallow(
    <OverviewSection {...defaultProps} />
  );

  it('should show the city name', () => {
    expect(component.find('PageBanner').prop('title')).toBe('Perth');
  });

  it('should show the city description', () => {
    expect(component.find('PageBanner').prop('description')).toBe('The description');
  });
});

describe('when multiple cities are passed in', () => {
  // this would occur when on the all cities page
  const component = shallow(
    <OverviewSection
      {...defaultProps}
      city={undefined}
      cities={[
        {
          description: 'The description',
          indices: {
            population: 77,
          },
          shortName: 'Perth',
        },
      ]}
    />
  );

  it('should show the overview title', () => {
    expect(component.find('PageBanner').prop('title')).toBe('OVERVIEW_TITLE');
  });

  it('should show the overview description', () => {
    expect(component.find('PageBanner').prop('description')).toBe('OVERVIEW_DESCRIPTION');
  });
});
