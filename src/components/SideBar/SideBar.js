/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import CityNavContainer from '../CityNavContainer/CityNavContainer';
import {
  NO_CATEGORY,
  NO_CITY,
} from '../../constants';
import style from './SideBar.scss';
{ /* import logo from '../../images/australia-dta-logo.svg'; */}
import logo from '../../images/crest_stacked_reverse.svg';

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

        <NavLink
          className={style.coaWrapper}
          to={`/${NO_CITY}/${NO_CATEGORY}`}
        >
          <img
            className={style.coa}
            src={logo}
            alt="coat of arms"
          />
        </NavLink>

        <CityNavContainer cityId={props.cityId} />
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
  cityId: PropTypes.string.isRequired,
};

SideBar.defaultProps = {
  location: {},
};


// withRouter makes location available so we know when to close the SideBar
// but it breaks unit tests, so we also export the 'raw' component just for testing
export const UnwrappedSideBar = SideBar;

export default withRouter(SideBar);
