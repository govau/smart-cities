import React from 'react';
import PropTypes from 'prop-types';
import style from './Pill.scss';

const classnames = require('classnames/bind').bind(style);

const Pill = (props) => {
  const className = classnames(
    props.className,
    style.wrapper,
    {
      pill__shadow: props.shadow,
    },
  );

  return (
    <span
      className={className}
      style={{
        ...props.style,
        height: props.height,
        lineHeight: `${props.height - 4}px`, // allow for 2px border
        borderRadius: props.height / 2,
      }}
    >
      {props.children}
    </span>
  );
};

Pill.propTypes = {
  height: PropTypes.number,
  shadow: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element,
    PropTypes.node,
  ]),
};

Pill.defaultProps = {
  height: 30,
};

export default Pill;
