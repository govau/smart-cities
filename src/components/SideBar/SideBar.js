import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import classNames from 'classnames';
import CityNavContainer from '../CityNavContainer/CityNavContainer';
import style from './SideBar.scss';
import coaWhite from './coa-white.svg';

class SideBar extends Component {
  componentWillReceiveProps(nextProps) {
    // If side nav is open and the pathname just changed, that means we should close the nav
    if (nextProps.isOpen && this.props.location.pathname !== nextProps.location.pathname) {
      this.props.closeNav();
    }
  }

  render() {
    const { props } = this;

    const className = classNames(
      style.wrapper,
      {
        [style.showOpen]: props.isOpen,
      },
    );

    return (
      <div className={className}>
        <button
          className={style.closeButton}
          onClick={props.closeNav}
          aria-label="close navigation menu"
        >✕</button>

        <div className={style.coaWrapper}>
          <img
            className={style.coa}
            src={coaWhite}
            alt="coat of arms"
          />
        </div>

        <CityNavContainer
          categoryId={props.categoryId}
          // pass in cityId so the nav updates when the city changes
          cityId={props.cityId}
        />
      </div>
    );
  }
}

SideBar.propTypes = {
  closeNav: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  categoryId: PropTypes.string.isRequired,
  cityId: PropTypes.string.isRequired,
};

SideBar.defaultProps = {
  location: {},
};


// withRouter makes location available to we can test when to close the SideBar
// but it breaks unit tests, so we also export the 'raw' sidebar just for testing
export const UnwrappedSideBar = SideBar;

export default withRouter(SideBar);
