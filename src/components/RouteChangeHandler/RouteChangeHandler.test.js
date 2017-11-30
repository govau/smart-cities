import React from 'react';
import { shallow, mount } from 'enzyme';
import {UnwrappedComponent as RouteChangeHandler} from './RouteChangeHandler';
import { ELEMENT_IDS } from '../../constants';

const getElementById = document.getElementById;
const querySelector = document.querySelector;

window.scrollTo = jest.fn();

it('should match Snapshot', () => {
  const component = shallow(
    <RouteChangeHandler>
      The content
    </RouteChangeHandler>
  );

  expect(component.debug()).toMatchSnapshot();
});

it('should scroll to top on mount when there is no hash', () => {
  shallow(
    <RouteChangeHandler>
      The content
    </RouteChangeHandler>
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
    style: {
      outline: 5,
    },
    addEventListener: jest.fn(),
    focus: jest.fn(),
    setAttribute: jest.fn(),
  }));

  shallow(
    <RouteChangeHandler
      location={{ pathName: '/location-1' }}
    >
      The content
    </RouteChangeHandler>
  );

  expect(document.querySelector).toHaveBeenCalledWith('#an-element-id');
  expect(window.scrollTo).toHaveBeenCalledTimes(1);
  expect(window.scrollTo).toHaveBeenCalledWith(0, 137 + 541);

  document.querySelector = querySelector;
});

it('should scroll on route change', () => {
  const component = shallow(
    <RouteChangeHandler
      location={{ pathName: '/location-1' }}
    >
      The content
    </RouteChangeHandler>
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

it('should focus on an element when provided with a hash', () => {
  document.location.hash = 'myhash';
  const focusOnElement = jest.fn();

  document.querySelector = jest.fn(() => ({
    getBoundingClientRect: () => ({
      top: 137,
    }),
    style: {
      outline: 5,
    },
    addEventListener: jest.fn(),
    focus: focusOnElement,
    setAttribute: jest.fn(),
  }));

  const wrapper = mount(
    <RouteChangeHandler location={{ pathname: '/1/2' }}>
      <div id="myhash">The content</div>
    </RouteChangeHandler>
  );

  wrapper.setProps({
    location: {
      pathname: '/2/1',
    },
  });

  expect(document.querySelector).toHaveBeenCalledWith('#myhash');
  expect(focusOnElement).toHaveBeenCalledTimes(1);

  document.location.hash = '';
});

it('should focus on the specifed element when the path changes', () => {
  const focusElementId = ELEMENT_IDS.INITIAL_FOCUS_POINT_ON_PAGE;

  const element = {
    getBoundingClientRect: () => ({
      top: 137,
    }),
    style: {
      outline: 5,
    },
    addEventListener: jest.fn(),
    focus: jest.fn(),
    setAttribute: jest.fn(),
  };

  document.getElementById = jest.fn(() => (element));

  const wrapper = mount(
    <RouteChangeHandler location={{ pathname: '/1/2' }}>
      <div id={focusElementId}>The content</div>
    </RouteChangeHandler>
  );

  wrapper.setProps({
    location: {
      pathname: '/2/1',
    },
  });

  expect(document.getElementById).toHaveBeenCalledWith(focusElementId);
  expect(element.focus).toHaveBeenCalledTimes(1);
  expect(element.style.outline).toBe('none');
  expect(element.setAttribute).toHaveBeenCalledWith('tabIndex', '0');

  document.getElementById = getElementById;
});

it('should remove tabIndex & reset outline on focused item blur', () => {
  const focusElementId = ELEMENT_IDS.INITIAL_FOCUS_POINT_ON_PAGE;
  const root = document.createElement('div');
  document.body.appendChild(root);

  const wrapper = mount(
    <RouteChangeHandler location={{ pathname: '/1/2' }}>
      <h1 id={focusElementId}>The content</h1>
    </RouteChangeHandler>,
    { attachTo: root }
  );

  wrapper.setProps({
    location: {
      pathname: '/2/1',
    },
  });

  // note: trying to simulate blur event does not work
  //   Eg) wrapper.find(`#${focusElementId}`).simulate('blur');
  //   as non-existant React event handler is called
  //   perhaps we should be using refs instead of actual dom
  const domNode = wrapper.find(`#${focusElementId}`).getDOMNode();
  domNode.blur();

  expect(domNode.getAttribute('style')).toBe('');
  expect(domNode.getAttribute('tabIndex')).toBe(null);
});
