
import {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

class ScrollToTopOnRouteChange extends Component {

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

ScrollToTopOnRouteChange.propTypes = {
  children: PropTypes.node,
};

export default withRouter(ScrollToTopOnRouteChange);
