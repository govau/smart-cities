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

  return (
    <svg
      className={className}
      width={`${props.size}px`}
      height={`${props.size}px`}
      viewBox={icon.viewBox}
      style={{ color: props.color }}
    >
      <title>{icon.title}</title>

      {icon.body}
    </svg>
  );
};

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(iconDefinitions)).isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  size: 16,
};

export default Icon;
