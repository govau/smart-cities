import React from 'react';
import PropTypes from 'prop-types';
import IndicatorCard from '../Card/IndicatorCard/IndicatorCard';
import { INDICATORS } from '../../constants';
import aggregateIndicatorForCities from '../../helpers/aggregateIndicatorForCities';
import getColorVariant from '../../helpers/getColorVariant';
import style from './CategoryBanner.scss';

const CategoryBanner = (props) => {
  const backgroundColor = getColorVariant(props.category.colorName, '020');
  const cardHighlightColor = getColorVariant(props.category.colorName, '500');
  const indicatorValue = props.city
    ? props.city.indices[props.category.heroIndicatorId]
    : aggregateIndicatorForCities(
      props.category.heroIndicatorId,
      props.cities,
    );

  return (
    <div style={{ backgroundColor }}>
      <div className={style.container}>
        <div className={style.titleText}>
          <h1 className={style.title}>{props.category.name}</h1>

          <p className={style.description}>{props.category.description}</p>
        </div>

        <IndicatorCard
          size="large"
          className={style.card}
          color={cardHighlightColor}
          indicator={props.category.heroIndicatorId}
          value={indicatorValue}
        />
      </div>
    </div>
  );
};

const cityPropShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  indices: PropTypes.object.isRequired,
};

CategoryBanner.propTypes = {
  category: PropTypes.shape({
    colorName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    heroIndicatorId: PropTypes.oneOf(Object.keys(INDICATORS)).isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  city: PropTypes.shape(cityPropShape),
  cities: PropTypes.arrayOf(PropTypes.shape(cityPropShape)),
};

export default CategoryBanner;
