import React from 'react';
import { shallow } from 'enzyme';
import PageWrapper from './PageWrapper';

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
