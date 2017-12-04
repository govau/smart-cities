import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RangeCard from './RangeCard/RangeCard';
import NumberCard from './NumberCard/NumberCard';
import {
  CARD_SIZES,
  INDICATORS,
} from '../../constants';
import style from './IndicatorCard.scss';

const IndicatorCard = (props) => {
  const Card = props.city ? NumberCard : RangeCard;

  return (
    <Card
      {...props}
      className={classnames(style.wrapper, props.className)}
      indicator={{
        ...INDICATORS[props.indicatorId],
        id: props.indicatorId,
      }}
    />
  );
};

const cityPropShape = {
  id: PropTypes.string.isRequired,
  indicators: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

IndicatorCard.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape(cityPropShape)),
  city: PropTypes.shape(cityPropShape),
  className: PropTypes.string,
  color: PropTypes.string.isRequired, // a hex code
  colorName: PropTypes.string.isRequired, // a color base name, e.g. 'jobs'
  indicatorId: PropTypes.oneOf(Object.keys(INDICATORS)).isRequired,
  size: PropTypes.oneOf(Object.values(CARD_SIZES)),
};

IndicatorCard.defaultProps = {
  size: CARD_SIZES.SMALL,
};

export default IndicatorCard;
