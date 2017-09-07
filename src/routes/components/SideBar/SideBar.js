import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './SideBar.scss';

class SideBar extends Component {
  componentWillReceiveProps(nextProps) {
    // If side nav is open and the pathname just changed, that means we should close the nav
    if (nextProps.isOpen && this.props.location.pathname !== nextProps.location.pathname) {
      this.props.closeNav();
    }
  }

  render() {
    const className = classNames(
      style.SideBar,
      {
        [style.SideBar_open]: this.props.isOpen
      },
    );

    const {closeNav} = this.props;

    return (
      <div className={className}>
        <button
          className="sideNav_close_button"
          onClick={closeNav}
          aria-label="close navigation menu"
        >✕</button>

        <h1>SideBar</h1>
      </div>
    );
  }
}

SideBar.propTypes = {
  closeNav: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default SideBar;
