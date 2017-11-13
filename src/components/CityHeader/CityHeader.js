import React from 'react';
import PropTypes from 'prop-types';
import style from './CityHeader.scss';

const CityHeader = props => (
  <div
    className={style.wrapper}
  >
    <div className={style.photoWrapper}>
      <img
        className={style.photo}
        src={`${process.env.PUBLIC_URL}/images/${props.cityId}.jpg`}
        alt=""
      />
    </div>

    <div className={style.container}>
      <h1 className={style.title}>
        {props.cityName}
      </h1>
    </div>
  </div>
);

CityHeader.propTypes = {
  cityName: PropTypes.string.isRequired,
  cityId: PropTypes.string.isRequired,
  categoryColorName: PropTypes.string.isRequired,
};

export default CityHeader;
