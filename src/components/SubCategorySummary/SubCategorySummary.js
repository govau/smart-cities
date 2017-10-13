import React from 'react';
import PropTypes from 'prop-types';
import IndicatorCard from '../Card/IndicatorCard/IndicatorCard';
import aggregateIndicatorForCities from '../../helpers/aggregateIndicatorForCities';
import getSubCategorySectionId from '../../helpers/getSubCategorySectionId';
import getColorVariant from '../../helpers/getColorVariant';
import { INDICATORS } from '../../constants';
import style from './SubCategorySummary.scss';

const SubCategorySummary = (props) => {
  const backgroundColor = getColorVariant(props.colorName, props.tint);
  const cardHighlightColor = getColorVariant(props.colorName, props.shade);

  const firstThreeIndicators = props.indicatorIds.slice(0, 3);

  const indicatorCardWrappers = firstThreeIndicators.map((indicatorId, i) => {
    const lastOne = i === (firstThreeIndicators.length - 1);
    const indicatorValue = props.city
      ? props.city.indices[indicatorId]
      : aggregateIndicatorForCities(
        indicatorId,
        props.cities,
      );

    return (
      <div
        key={indicatorId}
        className={style.cardWrapper}
      >
        <IndicatorCard
          className={style.card}
          indicator={indicatorId}
          color={cardHighlightColor}
          value={indicatorValue}
        />
        {lastOne && (
          <a
            className={style.linkWrapper}
            href={`#${getSubCategorySectionId(props.name)}`}
          >
            <span className={style.linkText}>View all {props.name} charts</span>
            <span className={style.linkIcon} />
          </a>
        )}
      </div>
    );
  });

  return (
    <div style={{ backgroundColor }}>
      <div className={style.container}>
        <div className={style.textWrapper}>
          <span className={style.iconWrapper} />

          <h3 className={style.title}>{props.name}</h3>
        </div>

        <div className={style.cardRow}>
          {indicatorCardWrappers}
        </div>
      </div>
    </div>
  );
};

const cityPropShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  indices: PropTypes.object.isRequired,
};

SubCategorySummary.propTypes = {
  city: PropTypes.shape(cityPropShape),
  cities: PropTypes.arrayOf(PropTypes.shape(cityPropShape)),
  colorName: PropTypes.string.isRequired,
  tint: PropTypes.string.isRequired,
  shade: PropTypes.string.isRequired,
  indicatorIds: PropTypes.arrayOf(
    PropTypes.oneOf(Object.keys(INDICATORS)),
  ).isRequired,
  name: PropTypes.string.isRequired,
};

export default SubCategorySummary;
