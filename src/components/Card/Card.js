import React from 'react';
import PropTypes from 'prop-types';
import style from './Card.scss';
import {
  CARD_SIZES,
  COLOR_NAMES,
  INDICATOR_CARD_TYPES,
} from '../../constants';

const classnames = require('classnames/bind').bind(style);

// This component is not meant to be used directly.
// Use either a <CategoryCard> or an <IndicatorCard>
const Card = (props) => {
  const className = classnames(
    'card',
    `card__${props.size}`,
    `card__${props.color}_color`,
    { card__category: props.type === INDICATOR_CARD_TYPES.CATEGORY },
    props.className,
  );

  return (
    <div className={className}>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ]).isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(Object.values(COLOR_NAMES)),
  size: PropTypes.oneOf(Object.values(CARD_SIZES)).isRequired,
  type: PropTypes.oneOf(Object.values(INDICATOR_CARD_TYPES)).isRequired,
};

Card.defaultProps = {
  color: COLOR_NAMES.PRIMARY,
};

export default Card;
