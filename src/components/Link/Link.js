import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './Link.scss';

const Link = props => (
  <a
    className={classnames(style.link, props.className)}
    href={props.href}
    rel="noopener noreferrer"
    target="_blank"
  >
    {props.children || props.href}
  </a>
);

Link.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

export default Link;
