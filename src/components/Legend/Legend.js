import React from 'react';
import PropTypes from 'prop-types';
import style from './Legend.scss';

const Legend = props => (
  <div className={props.className}>
    {props.series.map(item => (
      <div
        key={item.name}
        className={style.legendItem}
      >
        <svg width="20" height="20">
          <circle cx="10" cy="10" r="10" fill={item.color} />
        </svg>

        <span className={style.legendItemText}>{item.name}</span>
      </div>
    ))}
  </div>
);

Legend.propTypes = {
  className: PropTypes.string,
  series: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Legend;
