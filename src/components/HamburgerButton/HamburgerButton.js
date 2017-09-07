import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './HamburgerButton.scss';

const HamburgerButton = ({onClick, _className, label}) => {
  const className = classNames(
    style.hamburgerButton,
    _className,
  );

  return (
    <button
      className={className}
      onClick={onClick}
      aria-label={label}
    >
      <div className={style.hamburgerButton__hamburger_icon}>
        <div className={style.hamburgerButton__hamburger_icon_bar} />
        <div className={style.hamburgerButton__hamburger_icon_bar} />
        <div className={style.hamburgerButton__hamburger_icon_bar} />
      </div>
    </button>
  )
};

HamburgerButton.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

HamburgerButton.defaultProps = {
  label: 'open menu',
};

export default HamburgerButton;
