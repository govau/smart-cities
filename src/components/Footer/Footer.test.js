
/* global it, describe, expect */
import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';


describe('(Components) Footer - footer ', () => {
  it('should match Snapshot', () => {
    const renderedValue =  renderer.create(<Footer />).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
