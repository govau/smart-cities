/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import getColorVariant from '../../helpers/getColorVariant';
import style from './CityHeader.scss';

const CityHeader = (props) => {
  // as a fallback to the image we have a gradient in the color of the category
  const fromColor = getColorVariant(props.categoryColorName, '500');
  const toColor = getColorVariant(props.categoryColorName, '900');
  const background = `linear-gradient(140deg, ${fromColor}, ${toColor})`;

  return (
    <div
      className={style.wrapper}
      style={{ background }}
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
};

CityHeader.propTypes = {
  cityName: PropTypes.string.isRequired,
  cityId: PropTypes.string.isRequired,
  categoryColorName: PropTypes.string.isRequired,
};

export default CityHeader;
