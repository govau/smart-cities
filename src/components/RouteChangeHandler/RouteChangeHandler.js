import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { ELEMENT_IDS, NO_CATEGORY } from '../../constants';
import { incrementNavigationCount } from '../../helpers/userBehaviour';
import { logPageView } from '../../helpers/analyticsManager';

/**
 * Add an event listener which only listens once
 * There is a { once: true } parameter on addEventListener,
 * but it doesn't seem well-supported ATM
 */
const addOneTimeEventListener = (el, event, fn) => {
  const func = () => {
    el.removeEventListener(event, func);
    fn();
  };

  el.addEventListener(event, func);
};

function setFocusAttributes(el) {
  const focusPoint = el;
  const outlineStyle = focusPoint.style.outline;

  addOneTimeEventListener(focusPoint, 'blur', () => {
    focusPoint.style.outline = outlineStyle;
    focusPoint.removeAttribute('tabIndex');
  });

  focusPoint.setAttribute('tabIndex', '0');
  focusPoint.style.outline = 'none';
  focusPoint.focus();
}

// look for a suitable focus point
function findFocusPoint(oldPath, currentPath) {
  let focusPoint;

  // first look for a hash
  if (document.location.hash) {
    focusPoint = document.querySelector(document.location.hash);
  } else {
    // if we have changed cities, and landed on overview,
    // then focus on overview subnav item
    const oldCity = oldPath.split('/')[1];
    const [, currentCity, currentCategory] = currentPath.split('/');

    if (currentCategory === NO_CATEGORY && currentCity !== oldCity) {
      focusPoint = document.getElementById(ELEMENT_IDS.OVERVIEW_LINK);
    }
  }

  // finally, look for a manually set focus point ID
  if (!focusPoint) {
    focusPoint = document.getElementById(ELEMENT_IDS.INITIAL_FOCUS_POINT_ON_PAGE);
  }

  return focusPoint;
}

function scroll() {
  let targetScrollPos = 0;

  if (document.location.hash) {
    const targetEl = document.querySelector(document.location.hash);

    if (targetEl) {
      const dims = targetEl.getBoundingClientRect();
      targetScrollPos = dims.top + window.pageYOffset;
    }
  }

  window.scrollTo(0, targetScrollPos);
}

class RouteChangeHandler extends Component {
  componentDidMount() {
    // because we only client-side render, hashes in the URL are ignored on load
    // so once the DOM is rendered we scroll manually
    scroll();
  }

  componentDidUpdate(prevProps) {
    // when changing from one page to another
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // don't capture the initial redirect from "/"
      // since it will already have been captured via componentDidMount
      if (prevProps.location.pathname !== '/') {
        // Note that if a user navigates to "/", that will be
        // logged to GA instead of "/all-cities/overview".
        // But this isn't a problem because the "default site" setting in GA
        // allows us to report on these two as being the same page
        logPageView();
      }

      // apply focus if necessary
      const focusPoint = findFocusPoint(prevProps.location.pathname, this.props.location.pathname);

      if (focusPoint) {
        setFocusAttributes(focusPoint);
      }

      incrementNavigationCount();

      // scroll to the top or the element in the hash
      scroll();
    }
  }

  render() {
    return this.props.children;
  }
}

RouteChangeHandler.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// withRouter makes location available so we know when to scroll
// but it breaks unit tests, so we also export the 'raw' component just for testing
export const UnwrappedComponent = RouteChangeHandler;

export default withRouter(RouteChangeHandler);
