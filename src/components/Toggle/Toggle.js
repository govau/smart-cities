import React from 'react';
import PropTypes from 'prop-types';
import style from './Toggle.scss';

const classnames = require('classnames/bind').bind(style);

const Toggle = (props) => {
  const elementId = `${props.id}-toggle`;
  const className = classnames(
    props.className,
    props.colorName,
    style.toggle,
  );

  return (
    <label className={className} htmlFor={elementId}>
      <span className={style.labelText}>
        {props.label}
      </span>

      <span className={style.ui}>
        <input
          type="checkbox"
          className={style.input}
          id={elementId}
          checked={props.checked}
          onChange={e => props.onChange(e.target.checked)}
        />

        <span className={style.onOff} />

        <span className={style.handle} />
      </span>
    </label>
  );
};

Toggle.propTypes = {
  checked: PropTypes.bool,
  checkedBoxColor: PropTypes.string,
  className: PropTypes.string,
  colorName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Toggle.defaultProps = {
  // setting checked to 'undefined' makes an uncontrolled component, so we force 'false'
  checked: false,
};

export default Toggle;
