/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import numeral from 'numeral';
import IndicatorIcon from '../../IndicatorIcon/IndicatorIcon';
import {
  CARD_SIZES,
  INDICATORS,
} from '../../../constants';
import getColorVariant from '../../../helpers/getColorVariant';
import style from './RangeCard.scss';

const RangeCard = (props) => {
  const values = props.cities
    .map(city => city.indicators[props.indicator.id])
    .filter(n => n)
    .sort((a, b) => a - b);

  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);

  // Get an array of the cities that have the min/max value (usually just one)
  const minCities = props.cities.filter(city => city.indicators[props.indicator.id] === minValue);
  const maxCities = props.cities.filter(city => city.indicators[props.indicator.id] === maxValue);

  // put the scale min a bit below the actual minimum value
  // so the minimum bar isn't 0% high
  const scaleMin = minValue - ((maxValue - minValue) * 0.1);
  const range = maxValue - scaleMin;
  const barWidth = 1 / values.length;

  const cardSizeClassName = props.size === CARD_SIZES.LARGE ? style.largeCard : style.smallCard;

  const className = classnames(
    style.wrapper,
    cardSizeClassName,
    props.className,
  );

  return (
    <div className={className}>
      <p className={style.indicatorName}>{props.indicator.name}</p>

      <IndicatorIcon
        className={style.indicatorTypeMark}
        color={getColorVariant(props.colorName, '500')}
        contextual={props.indicator.contextual}
      />

      <div className={style.chartWrapper}>
        <svg className={style.svg}>
          {values.map((value, i) => {
            const height = (value - scaleMin) / range;
            const left = barWidth * i;
            const fill = (i === 0 || i === values.length - 1)
              ? getColorVariant(props.colorName, '500')
              : getColorVariant(props.colorName, '060');

            return (
              <rect
                key={left}
                className={style.bar}
                x={`${left * 100}%`}
                y={`${(1 - height) * 100}%`}
                width={`${barWidth * 100}%`}
                height="200%"
                rx="2"
                ry="2"
                fill={fill}
              />
            );
          })}
        </svg>
      </div>

      <div
        className={style.footer}
        style={{
          background: getColorVariant(props.colorName, '020'),
        }}
      >
        <div>
          <div className={style.footerCity}>
            {minCities.length > 1 ? `${minCities.length} cities` : minCities[0].name}
          </div>

          <div className={style.footerValue}>
            {numeral(minValue).format(props.indicator.format)}
          </div>
        </div>

        <div className={style.maxValues}>
          <div className={style.footerCity}>
            {maxCities.length > 1 ? `${maxCities.length} cities` : maxCities[0].name}
          </div>

          <div className={style.footerValue}>
            {numeral(maxValue).format(props.indicator.format)}
          </div>
        </div>
      </div>
    </div>
  );
};

RangeCard.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    indicators: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  className: PropTypes.string,
  colorName: PropTypes.string.isRequired, // a color base name, e.g. 'jobs'
  indicator: PropTypes.shape({
    id: PropTypes.oneOf(Object.keys(INDICATORS)).isRequired,
    format: PropTypes.string,
    name: PropTypes.string.isRequired,
    contextual: PropTypes.bool.isRequired,
  }).isRequired,
  size: PropTypes.oneOf(Object.values(CARD_SIZES)).isRequired,
};

export default RangeCard;
