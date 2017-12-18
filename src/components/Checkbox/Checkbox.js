import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import style from './Checkbox.scss';

const Checkbox = (props) => {
  const elementId = `${props.id}-checkbox`;

  return (
    <div className={classnames(style.wrapper, props.className)}>
      <input
        className={style.input}
        type="checkbox"
        id={elementId}
        checked={props.checked}
        onChange={e => props.onChange(e.target.checked)}
      />

      <label
        className={style.label}
        htmlFor={elementId}
      >
        <span
          style={{ color: props.checkedBoxColor }}
          className={style.checkbox}
        />

        {props.label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool,
  checkedBoxColor: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Checkbox.defaultProps = {
  // setting checked to 'undefined' makes an uncontrolled component, so we force 'false'
  checked: false,
};

export default Checkbox;
