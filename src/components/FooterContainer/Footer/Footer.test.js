import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

it('should match Snapshot', () => {
  const component =  shallow(<Footer />);
  expect(component.debug()).toMatchSnapshot();
});

it('should not render the category section if none is passed', () => {
  const component =  shallow(<Footer />);

  expect(component.find('.categoryDetailsWrapper').length).toBe(0);
});

it('should render the category section if passed categories', () => {
  const component =  shallow(
    <Footer
      category={{
        name: 'The category',
        subCategories: [
          { name: 'sub-category one' },
          { name: 'sub-category two' },
          { name: 'sub-category three' },
        ]
      }}
    />
  );

  expect(component.find('.categoryDetailsWrapper').length).toBe(1);
  expect(component.find('.subCategoryLink').length).toBe(3);
});
