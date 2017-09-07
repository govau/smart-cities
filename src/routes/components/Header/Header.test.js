
/* global it, describe, expect */
import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router';
import Header, {SidebarHeader} from './header';


const Container = ({children}) => {
  return (
    <MemoryRouter initialEntries={['/']}>{children}</MemoryRouter>
  )
};

describe('(Components) Header - header ', () => {
  it('should match Snapshot', () => {
    const renderedValue =  renderer.create(
      <Container>
        <Header openNav={() => {}}/>
      </Container>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});

describe('(Components) Sidebar Header - header ', () => {
  it('should match Snapshot', () => {
    const renderedValue =  renderer.create(
      <Container>
        <SidebarHeader />
      </Container>
    ).toJSON();
    expect(renderedValue).toMatchSnapshot();
  });
});
