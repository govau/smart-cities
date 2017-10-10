import React from 'react';
import { shallow } from 'enzyme';
import PageWrapper from './PageWrapper';
import blockScroll from '../../helpers/blockScroll';

jest.mock('../../helpers/blockScroll', () => jest.fn());

const defaultProps = {
  categoryId: 'jobs',
  cityId: 'perth',
};

it('should match Snapshot', () => {
  const component = shallow(
    <PageWrapper {...defaultProps}>
      <div>render me</div>
    </PageWrapper>
  );

  expect(component.debug()).toMatchSnapshot();
});

describe('when the nav is opened', () => {
  it('should open the nav', () => {
    const component = shallow(
      <PageWrapper {...defaultProps}>
        <div>render me</div>
      </PageWrapper>
    );

    component.instance().setNavState(true); // pass true to open

    expect(component.state('navIsOpen')).toBe(true);
  });

  it('should block body scroll', () => {
    const component = shallow(
      <PageWrapper {...defaultProps}>
        <div>render me</div>
      </PageWrapper>
    );

    component.instance().setNavState(true); // pass true to open

    expect(blockScroll).toHaveBeenCalledTimes(1);
    expect(blockScroll).toHaveBeenCalledWith(true);
  });
});

describe('when the nav is closed', () => {
  it('should close the nav', () => {
    const component = shallow(
      <PageWrapper {...defaultProps}>
        <div>render me</div>
      </PageWrapper>
    );

    component.instance().setState({ isNavOpen: true });

    component.instance().setNavState(false); // pass false to close

    expect(component.state('navIsOpen')).toBe(false);
  });

  it('should unblock body scroll', () => {
    const component = shallow(
      <PageWrapper {...defaultProps}>
        <div>render me</div>
      </PageWrapper>
    );

    component.instance().setState({ isNavOpen: true });

    component.instance().setNavState(false); // pass false to close

    expect(blockScroll).toHaveBeenCalledTimes(1);
    expect(blockScroll).toHaveBeenCalledWith(false);
  });
});

it('should unblock scroll on unmount', () => {
  const component = shallow(
    <PageWrapper {...defaultProps}>
      <div>render me</div>
    </PageWrapper>
  );

  expect(blockScroll).toHaveBeenCalledTimes(0);

  component.unmount();

  expect(blockScroll).toHaveBeenCalledTimes(1);
  expect(blockScroll).toHaveBeenCalledWith(false);
});
