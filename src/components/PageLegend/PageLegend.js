import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import getColorVariant from '../../helpers/getColorVariant';
import style from './PageLegend.scss';

const PageLegend = (props) => {
  if (props.isAllCitiesPage && !props.cities) {
    console.warn('You said this is an all-cities page, but did not pass in any cities');

    return null;
  }

  const lightColor = getColorVariant(props.colorName, '020');
  const mediumColor = getColorVariant(props.colorName, '080');
  const darkColor = getColorVariant(props.colorName, '900');

  return (
    <div
      className={style.wrapper}
      style={{ background: lightColor }}
    >
      <div className={style.container}>
        {!props.isContextPage && (
          <div className={style.indicatorTypesWrapper}>
            <div className={style.indicatorTypeWrapper}>
              <Icon
                className={style.icon}
                color={darkColor}
                icon="contextualIndicator"
                size={24}
              />

              <span className={style.text}>Contextual indicators</span>
            </div>

            <div className={style.indicatorTypeWrapper}>
              <Icon
                className={style.icon}
                color={darkColor}
                icon="performanceIndicator"
                size={24}
              />

              <span className={style.text}>Performance indicators</span>
            </div>
          </div>
        )}

        {props.isAllCitiesPage && !props.isContextPage && (
          <div
            className={style.spacer}
            style={{ background: mediumColor }}
          />
        )}

        {props.isAllCitiesPage && (
          <div className={style.rangeWrapper}>
            <div className={style.rangeText}>
              Indicator range for {props.cities.length} Smart cities
            </div>

            <div className={style.rangeIconsWrapper}>
              <div className={style.rangeIconWrapper}>
                <Icon
                  className={style.icon}
                  color={darkColor}
                  icon="maxBarsInCircle"
                  size={24}
                />

                <span className={style.text}>Highest</span>
              </div>

              <div className={style.rangeIconWrapper}>
                <Icon
                  className={style.icon}
                  color={darkColor}
                  icon="minBarsInCircle"
                  size={24}
                />

                <span className={style.text}>Lowest</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

PageLegend.propTypes = {
  cities: PropTypes.array, // eslint-disable-line react/forbid-prop-types
  colorName: PropTypes.string.isRequired,
  isAllCitiesPage: PropTypes.bool,
  isContextPage: PropTypes.bool,
};

export default PageLegend;
