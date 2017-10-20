import React from 'react';
import PropTypes from 'prop-types';
import getColorVariant from '../../helpers/getColorVariant';
import Icon from '../Icon/Icon';
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

        {props.categoryIconId && (
          <Icon
            className={style.iconWrapper}
            color={getColorVariant(props.categoryColorName, '500')}
            icon={props.categoryIconId}
            size={180}
          />
        )}
      </div>
    </div>
  );
};

CityHeader.propTypes = {
  cityName: PropTypes.string.isRequired,
  categoryIconId: PropTypes.string,
  categoryColorName: PropTypes.string.isRequired,
};

export default CityHeader;
