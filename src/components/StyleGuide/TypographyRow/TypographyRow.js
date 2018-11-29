/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import style from './TypographyRow.scss';

const TypographyRow = props => (
  <div className={style.row}>
    <p style={props.style}>
       The quick brown fox
    </p>

    <div className={style.css}>
      <p>font-size: {props.style.fontSize}px</p>
      <p>font-weight: {props.style.fontWeight}</p>
    </div>
  </div>
);

TypographyRow.propTypes = {
  style: PropTypes.shape({
    fontSize: PropTypes.number.isRequired,
    fontWeight: PropTypes.number.isRequired,
  }).isRequired,
};

export default TypographyRow;
