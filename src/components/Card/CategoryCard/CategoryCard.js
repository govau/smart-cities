import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Card from '../Card';
import style from './CategoryCard.scss';
import {
  CARD_SIZES,
  INDICATOR_CARD_TYPES,
} from '../../../constants';

const CategoryCard = (props) => {
  const className = classnames(
    style.wrapper,
    props.className,
  );

  return (
    <Card
      {...props}
      size={CARD_SIZES.LARGE}
      type={INDICATOR_CARD_TYPES.CATEGORY}
      className={className}
    >
      <div className={style.iconWrapper} />

      <div className={style.text}>{props.header}</div>
    </Card>
  );
};

CategoryCard.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  header: PropTypes.string,
  number: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
};

export default CategoryCard;
