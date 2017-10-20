import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import Card from '../Card';
import Icon from '../../Icon/Icon';
import {
  CARD_SIZES,
  INDICATORS,
  INDICATOR_CARD_TYPES,
} from '../../../constants';
import stripPrefixAndSuffix from '../../../helpers/stripPrefixAndSuffix';
import getColorVariant from '../../../helpers/getColorVariant';
import style from './IndicatorCard.scss';

const classnames = require('classnames/bind').bind(style);

const IndicatorCard = (props) => {
  const indicator = typeof props.indicator === 'string'
    ? INDICATORS[props.indicator]
    : props.indicator;

  const className = classnames(
    style.wrapper,
    `wrapper__${props.size}`,
    props.className,
  );

  // Most indicators define a format. If supplied, this format is applied to the number here
  const formattedNumber = indicator.format
    ? numeral(props.value).format(indicator.format)
    : props.value;

  // The prefix and suffix are rendered in different spans, so we split them out here
  const [formatPrefix, value, formatSuffix] = stripPrefixAndSuffix(formattedNumber);

  // In addition to the format prefix/suffix (e.g. "%")
  // a card specific prefix/suffix can be added (e.g. "per year")
  const displayPrefix = `${indicator.cardPrefix || ''}${formatPrefix}`;
  const displaySuffix = `${formatSuffix}${indicator.cardSuffix || ''}`;

  return (
    <Card
      {...props}
      type={INDICATOR_CARD_TYPES.INDICATOR}
      className={className}
    >
      <p className={style.header}>{indicator.name}</p>

      {!indicator.contextual && (
        <Icon
          className={style.indicatorTypeMark}
          color={getColorVariant(props.colorName, '900')}
          icon={props.isCategoryPage ? 'indicatorTypeMarkSolid' : 'indicatorTypeMarkBorder'}
          size={14}
        />
      )}

      <div className={style.indicatorWrapper}>
        {!!displayPrefix && (
          <span className={classnames(style.prefix, style.symbol)}>{displayPrefix}</span>
        )}

        <span className={style.number}>{value}</span>

        {!!displaySuffix && (
          <span className={classnames(style.suffix, style.symbol)}>{displaySuffix}</span>
        )}
      </div>
    </Card>
  );
};

IndicatorCard.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string.isRequired, // a hex code
  colorName: PropTypes.string.isRequired, // a color base name, e.g. 'jobs'
  indicator: PropTypes.oneOfType([ // accepts an indicator object or a string
    PropTypes.shape({
      cardPrefix: PropTypes.string,
      cardSuffix: PropTypes.string,
      format: PropTypes.string,
      name: PropTypes.string.isRequired,
      contextual: PropTypes.bool.isRequired,
    }),
    PropTypes.string,
  ]).isRequired,
  isCategoryPage: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  size: PropTypes.oneOf(Object.values(CARD_SIZES)),
};

IndicatorCard.defaultProps = {
  size: CARD_SIZES.SMALL,
};

export default IndicatorCard;
