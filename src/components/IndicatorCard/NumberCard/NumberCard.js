/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import classnames from 'classnames';
import IndicatorIcon from '../../IndicatorIcon/IndicatorIcon';
import {
  CARD_SIZES,
  INDICATORS,
} from '../../../constants';
import stripPrefixAndSuffix from '../../../helpers/stripPrefixAndSuffix';
import getColorVariant from '../../../helpers/getColorVariant';
import style from './NumberCard.scss';

const NumberCard = (props) => {
  const indicatorValue = props.city.indicators[props.indicator.id];
  const hasNoData = typeof indicatorValue === 'undefined';

  let displayValue;
  let displayPrefix;
  let displaySuffix;

  if (hasNoData) {
    displayValue = 'No data';
  } else {
    const formattedNumber = numeral(indicatorValue).format(props.indicator.format);

    // The prefix and suffix are rendered in different spans, so we split them out here
    const [formatPrefix, value, formatSuffix] = stripPrefixAndSuffix(formattedNumber);

    // In addition to the format prefix/suffix (e.g. "%")
    // a card specific prefix/suffix can be added (e.g. "per year")
    displayPrefix = `${props.indicator.cardPrefix || ''}${formatPrefix}`;
    displaySuffix = `${formatSuffix}${props.indicator.cardSuffix || ''}`;

    displayValue = value;
  }

  const cardSizeClassName = props.size === CARD_SIZES.LARGE ? style.largeCard : style.smallCard;

  const className = classnames(
    style.wrapper,
    cardSizeClassName,
    props.className,
    {
      [style.noData]: hasNoData,
    },
  );

  return (
    <div
      className={className}
      style={{ borderBottomColor: props.color }}
    >
      <p className={style.indicatorName}>{props.indicator.name}</p>

      <IndicatorIcon
        className={style.indicatorTypeMark}
        color={getColorVariant(props.colorName, '500')}
        contextual={props.indicator.contextual}
      />

      <div className={style.indicatorBody}>
        <div className={style.numberWrapper}>
          {!!displayPrefix && (
            <span className={classnames(style.prefix, style.symbol)}>{displayPrefix}</span>
          )}

          <span className={style.number}>{displayValue}</span>

          {!!displaySuffix && (
            <span className={classnames(style.suffix, style.symbol)}>{displaySuffix}</span>
          )}
        </div>
      </div>
    </div>
  );
};

const cityPropShape = {
  id: PropTypes.string.isRequired,
  indicators: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

NumberCard.propTypes = {
  city: PropTypes.shape(cityPropShape).isRequired,
  className: PropTypes.string,
  color: PropTypes.string.isRequired, // a hex code
  colorName: PropTypes.string.isRequired, // a color base name, e.g. 'jobs'
  indicator: PropTypes.shape({
    id: PropTypes.oneOf(Object.keys(INDICATORS)).isRequired,
    cardPrefix: PropTypes.string,
    cardSuffix: PropTypes.string,
    format: PropTypes.string,
    name: PropTypes.string.isRequired,
    contextual: PropTypes.bool.isRequired,
  }).isRequired,
  size: PropTypes.oneOf(Object.values(CARD_SIZES)).isRequired,
};

export default NumberCard;
