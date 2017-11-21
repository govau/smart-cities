import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import classnames from 'classnames';
import Icon from '../Icon/Icon';
import {
  CARD_SIZES,
  INDICATORS,
} from '../../constants';
import stripPrefixAndSuffix from '../../helpers/stripPrefixAndSuffix';
import getColorVariant from '../../helpers/getColorVariant';
import style from './IndicatorCard.scss';

// we don't create a new component here because the number styles are
// tightly bound to the styles of the card they're in
function renderIndicatorNumber(numberProps) {
  const indicator = typeof numberProps.indicator === 'string'
    ? INDICATORS[numberProps.indicator]
    : numberProps.indicator;

  const formattedNumber = numeral(numberProps.value).format(indicator.format);

  // The prefix and suffix are rendered in different spans, so we split them out here
  const [formatPrefix, value, formatSuffix] = stripPrefixAndSuffix(formattedNumber);

  // In addition to the format prefix/suffix (e.g. "%")
  // a card specific prefix/suffix can be added (e.g. "per year")
  const displayPrefix = `${indicator.cardPrefix || ''}${formatPrefix}`;
  const displaySuffix = `${formatSuffix}${indicator.cardSuffix || ''}`;

  let numberType;
  if (numberProps.showDualNumbers) {
    if (numberProps.isSecondNumber) {
      numberType = style.secondNumber;
    } else {
      numberType = style.firstNumber;
    }
  } else {
    numberType = style.onlyNumber;
  }

  const className = classnames(
    style.indicatorNumberWrapper,
    numberType,
  );

  return (
    <div className={className}>
      {numberProps.showDualNumbers && (
        <Icon
          icon={numberProps.isSecondNumber ? 'minBars' : 'maxBars'}
          className={style.minMaxIcon}
          color={numberProps.color}
        />
      )}

      {!!displayPrefix && (
        <span className={classnames(style.prefix, style.symbol)}>{displayPrefix}</span>
      )}

      <span className={style.number}>{value}</span>

      {!!displaySuffix && (
        <span className={classnames(style.suffix, style.symbol)}>{displaySuffix}</span>
      )}
    </div>
  );
}

const IndicatorCard = (props) => {
  const showDualNumbers = Array.isArray(props.value);

  if (showDualNumbers && props.value.length !== 2) {
    console.warn(`Exactly 2 numbers must be passed to an IndicatorCard, you passed ${props.value.length}`);

    return null;
  }

  const indicator = typeof props.indicator === 'string'
    ? INDICATORS[props.indicator]
    : props.indicator;

  const darkColor = getColorVariant(props.colorName, '900');
  const cardSizeClassName = props.size === CARD_SIZES.LARGE ? style.largeCard : style.smallCard;
  const dualOrSingleClassName = showDualNumbers ? style.dualNumber : style.singleNumber;

  const className = classnames(
    style.wrapper,
    cardSizeClassName,
    dualOrSingleClassName,
    props.className,
  );

  return (
    <div
      className={className}
      style={{ borderBottomColor: props.color }}
    >
      <p className={style.header}>{indicator.name}</p>

      {!props.isContextPage && (
        <Icon
          className={style.indicatorTypeMark}
          color={darkColor}
          icon={indicator.contextual ? 'contextualIndicator' : 'performanceIndicator'}
          size={14}
        />
      )}

      <div className={style.indicatorNumbers}>
        {renderIndicatorNumber({
          indicator,
          value: showDualNumbers ? props.value[1] : props.value,
          showDualNumbers,
          color: darkColor,
        })}

        {showDualNumbers && (
          renderIndicatorNumber({
            indicator,
            value: props.value[0],
            showDualNumbers,
            color: darkColor,
            isSecondNumber: true,
          })
        )}
      </div>
    </div>
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
  isContextPage: PropTypes.bool,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  size: PropTypes.oneOf(Object.values(CARD_SIZES)),
};

IndicatorCard.defaultProps = {
  size: CARD_SIZES.SMALL,
};

export default IndicatorCard;
