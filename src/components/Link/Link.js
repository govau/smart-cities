import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './Link.scss';

const Link = (props) => {
  const rel = props.external ? 'noopener noreferrer' : null;
  const target = props.external ? '_blank' : null;

  return (
    <a
      className={classnames(style.link, props.className)}
      href={props.href}
      rel={rel}
      target={target}
    >
      {props.children}
    </a>
  );
};

Link.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  external: PropTypes.bool,
  href: PropTypes.string.isRequired,
};

export default Link;
