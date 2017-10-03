import React from 'react';
import PropTypes from 'prop-types';
import IndicatorCard from '../Card/IndicatorCard/IndicatorCard';
import style from './CategoryBanner.scss';
import {
  AGGREGATION_METHODS,
  INDICATORS,
} from '../../constants';

// TODO (davidg): these aggregators are temporary,
// it might be the case that we don't do any aggregation
// or it might be the case that we do...
const sumIndicators = (cities, indicator) => cities.reduce((result, current) => (
  result + current.indices[indicator]
), 0);

function aggregateIndicatorForCities({ cities, indicator, aggregationMethod }) {
  if (aggregationMethod === AGGREGATION_METHODS.AVERAGE) {
    return sumIndicators(cities, indicator) / cities.length;
  } else if (aggregationMethod === AGGREGATION_METHODS.SUM) {
    return sumIndicators(cities, indicator);
  }

  console.error(`${aggregationMethod} is not a valid aggregation method`);
  return null;
}

const CategoryBanner = (props) => {
  // TODO (davidg): when we have the colour-fading system in place, this should
  // be a variation of the category color
  const titleBannerBackgroundColor = '#eee';

  const heroIndicator = INDICATORS[props.category.heroIndicator.id];

  const indicatorValue = aggregateIndicatorForCities({
    cities: props.cities,
    indicator: props.category.heroIndicator.id,
    aggregationMethod: props.category.heroIndicator.aggregationMethod,
  });

  return (
    <div style={{ background: titleBannerBackgroundColor }}>
      <div className={style.container}>
        <div className={style.titleText}>
          <h1 className={style.title}>{props.category.name}</h1>

          <p className={style.description}>{props.category.description}</p>
        </div>

        <IndicatorCard
          size="large"
          className={style.card}
          indicator={heroIndicator}
          value={indicatorValue}
        />
      </div>
    </div>
  );
};

CategoryBanner.propTypes = {
  category: PropTypes.shape({
    colorName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    heroIndicator: PropTypes.shape({
      id: PropTypes.oneOf(Object.keys(INDICATORS)).isRequired,
      aggregationMethod: PropTypes.oneOf(Object.keys(AGGREGATION_METHODS)).isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    indices: PropTypes.object.isRequired,
  })).isRequired,
};

export default CategoryBanner;
