import React from 'react';
import PropTypes from 'prop-types';
import getColorVariant from '../../helpers/getColorVariant';
import style from './CityHeader.scss';

const shades = [
  '500',
  '600',
  '700',
  '800',
  '900',
];

const CityHeader = (props) => {
  const backgroundPanels = shades.map(shade => (
    <div
      key={shade}
      className={style.backgroundPanel}
      style={{
        background: getColorVariant(props.categoryColorName, shade),
      }}
    />
  ));

  return (
    <div className={style.wrapper}>
      <div className={style.backgroundPanelWrapper}>
        {backgroundPanels}
      </div>

      <div className={style.container}>
        <h1 className={style.title}>
          {props.cityName}
        </h1>

        <span className={style.iconWrapper} />
      </div>
    </div>
  );
};

CityHeader.propTypes = {
  cityName: PropTypes.string.isRequired,
  categoryColorName: PropTypes.string.isRequired,
};

export default CityHeader;
