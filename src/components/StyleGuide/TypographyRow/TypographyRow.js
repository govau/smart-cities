import React from 'react';
import PropTypes from 'prop-types';
import style from './TypographyRow.scss';

const TypographyRow = props => (
  <div className={style.row}>
    <p className={props.className}>{props.sampleText}</p>

    <code className={style.code}>{props.variableName}</code>
  </div>
);

TypographyRow.propTypes = {
  className: PropTypes.string.isRequired,
  variableName: PropTypes.string.isRequired,
  sampleText: PropTypes.string.isRequired,
};

export default TypographyRow;
