import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import style from './IndicatorCard.scss';
import {
  CARD_SIZES,
  INDICATOR_CARD_TYPES,
} from '../../../constants';

const classnames = require('classnames/bind').bind(style);

const IndicatorCard = (props) => {
  const className = classnames(
    style.wrapper,
    `wrapper__${props.size}`,
    props.className,
  );

  return (
    <Card
      {...props}
      type={INDICATOR_CARD_TYPES.INDICATOR}
      className={className}
    >
      <p className={style.header}>{props.header}</p>

      <div className={style.indicatorWrapper}>
        {!!props.prefix && (
          <span className={classnames(style.prefix, style.symbol)}>{props.prefix}</span>
        )}

        <span className={style.number}>{props.number}</span>

        {!!props.suffix && (
          <span className={classnames(style.suffix, style.symbol)}>{props.suffix}</span>
        )}
      </div>
    </Card>
  );
};

IndicatorCard.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  number: PropTypes.string,
  prefix: PropTypes.string,
  size: PropTypes.oneOf(Object.values(CARD_SIZES)),
  suffix: PropTypes.string,
};

IndicatorCard.defaultProps = {
  size: CARD_SIZES.SMALL,
};

export default IndicatorCard;
