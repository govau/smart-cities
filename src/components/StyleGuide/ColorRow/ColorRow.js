import React from 'react';
import PropTypes from 'prop-types';
import style from './ColorRow.scss';

const classnames = require('classnames/bind').bind(style);

const ColorRow = props => (
  <div className={style.row}>
    {props.colors.map(color => (
      <div className={style.swatchWrapper}>
        <div className={classnames(color.className, style.colorSample)} />

        <code className={style.variableName}>{color.variableName}</code>
      </div>
    ))}
  </div>
);

ColorRow.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({
    className: PropTypes.string.isRequired,
    variableName: PropTypes.string.isRequired,
  })),
};

export default ColorRow;
