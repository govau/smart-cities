import React from 'react';
import { shallow } from 'enzyme';
import {UnwrappedComponent as ScrollToTopOnRouteChange} from './ScrollToTopOnRouteChange';

window.scrollTo = jest.fn();

it('should match Snapshot', () => {
  const component = shallow(
    <ScrollToTopOnRouteChange>
      The content
    </ScrollToTopOnRouteChange>
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should scroll to top on mount when there is no hash', () => {
  shallow(
    <ScrollToTopOnRouteChange>
      The content
    </ScrollToTopOnRouteChange>
  );

  expect(window.scrollTo).toHaveBeenCalledTimes(1);
  expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
});

it('should scroll to an element on mount if there is a hash', () => {
  document.location.hash = 'an-element-id';
  window.pageYOffset = 541; // simulate the page being scrolled down already

  // we mock out querySelector being called and just return an object with
  // a getBoundingClientRect method
  document.querySelector = jest.fn(() => ({
    getBoundingClientRect: () => ({
      top: 137,
    }),
  }));

  shallow(
    <ScrollToTopOnRouteChange
      location={{ pathName: '/location-1' }}
    >
      The content
    </ScrollToTopOnRouteChange>
  );

  expect(document.querySelector).toHaveBeenCalledWith('#an-element-id');
  expect(window.scrollTo).toHaveBeenCalledTimes(1);
  expect(window.scrollTo).toHaveBeenCalledWith(0, 137 + 541);
});

it('should scroll on route change', () => {
  const component = shallow(
    <ScrollToTopOnRouteChange
      location={{ pathName: '/location-1' }}
    >
      The content
    </ScrollToTopOnRouteChange>
  );

  // it has scrolled once (on mount)
  expect(window.scrollTo).toHaveBeenCalledTimes(1);

  // change the props
  component.setProps({
    children: 'new children',
  });

  // but it doesn't try and scroll again since the location prop didn't change
  expect(window.scrollTo).toHaveBeenCalledTimes(1);

  // now change the location prop
  component.setProps({
    location: {
      pathName: '/location-2',
    }
  });

  // it should try and scroll again
  expect(window.scrollTo).toHaveBeenCalledTimes(2);
});
