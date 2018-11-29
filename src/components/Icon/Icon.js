/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import iconDefinitions from './iconDefinitions';
import style from './Icon.scss';

const Icon = (props) => {
  const icon = iconDefinitions[props.icon];
  const className = classnames(
    props.className,
    icon.svgClassName,
    style.svg,
  );

  const size = props.size ? `${props.size}px` : null;
  // allow an empty string to be passed in as the title
  const title = 'title' in props ? props.title : icon.title;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox={icon.viewBox}
      style={{ color: props.color }}
    >
      <title>{title}</title>

      {icon.body}
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(iconDefinitions)).isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.string,
  title: PropTypes.string,
};

export default Icon;
