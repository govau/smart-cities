import React from 'react';
import PropTypes from 'prop-types';
import style from './Card.scss';
import {
  CARD_SIZES,
  INDICATOR_CARD_TYPES,
} from '../../constants';

const classnames = require('classnames/bind').bind(style);

// This component is not meant to be used directly.
// Use either a <CategoryCard> or an <IndicatorCard>
const Card = (props) => {
  const className = classnames(
    'card',
    `card__${props.size}`,
    { card__category: props.type === INDICATOR_CARD_TYPES.CATEGORY },
    props.className,
  );

  return (
    <div
      className={className}
      style={{ borderBottomColor: props.color }}
    >
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
  color: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(CARD_SIZES)).isRequired,
  type: PropTypes.oneOf(Object.values(INDICATOR_CARD_TYPES)).isRequired,
};

export default Card;
