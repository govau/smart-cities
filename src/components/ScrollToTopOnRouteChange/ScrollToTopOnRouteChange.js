import { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

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

class ScrollToTopOnRouteChange extends Component {
  componentDidMount() {
    // because we only client-side render, hashes in the URL are ignored on load
    // so once the DOM is rendered we scroll manually
    scroll();
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      // when changing from one page to another
      // scroll to the top or the element in the hash
      scroll();
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTopOnRouteChange.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// withRouter makes location available to we can test when to close the SideBar
// but it breaks unit tests, so we also export the 'raw' sidebar just for testing
export const UnwrappedComponent = ScrollToTopOnRouteChange;

export default withRouter(ScrollToTopOnRouteChange);
