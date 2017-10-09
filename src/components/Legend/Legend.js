import React from 'react';
import PropTypes from 'prop-types';
import style from './Legend.scss';

const Legend = props => (
  <div className={props.className}>
    {props.title && <div className={style.title}>{props.title}</div>}
    {props.series.map(item => (
      <div
        key={item.name}
        className={style.legendItem}
      >
        <span
          style={{ background: item.color }}
          className={style.legendItemMarker}
        />

        <span className={style.legendItemText}>{item.name}</span>
      </div>
    ))}
  </div>
);

Legend.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  series: PropTypes.arrayOf(PropTypes.shape({
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default Legend;
