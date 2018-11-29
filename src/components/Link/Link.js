/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './Link.scss';

const Link = (props) => {
  const classes = classnames(
    {
      [style.link]: !props.unstyled,
    },
    props.className,
  );

  return (
    <a
      className={classes}
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.children || props.href}
    </a>
  );
};

Link.propTypes = {
  unstyled: PropTypes.bool,
  children: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

Link.defaultProps = {
  unstyled: false,
};

export default Link;
