import React from 'react';
import PropTypes from 'prop-types';
import IndicatorCard from '../Card/IndicatorCard/IndicatorCard';
import aggregateIndicatorForCities from '../../helpers/aggregateIndicatorForCities';
import getSubCategorySectionId from '../../helpers/getSubCategorySectionId';
import getColorVariant from '../../helpers/getColorVariant';
import {
  INDICATORS,
  CATEGORY_IDS,
} from '../../constants';
import style from './SubCategorySummary.scss';

const SubCategorySummary = (props) => {
  const backgroundColor = getColorVariant(props.highlightColorLight);
  const cardHighlightColor = getColorVariant(props.highlightColorDark);

  const indicatorCardWrappers = props.summaryIndicatorIds.map((indicatorId, i) => {
    const lastOne = i === (props.summaryIndicatorIds.length - 1);
    const indicatorValue = props.city
      ? props.city.indices[indicatorId]
      : aggregateIndicatorForCities(
        indicatorId,
        props.cities,
      );

    const linkText = props.categoryId === CATEGORY_IDS.CONTEXT
      ? 'View contextual charts'
      : `View all ${props.name} charts`;

    return (
      <div
        key={indicatorId}
        className={style.cardWrapper}
      >
        <IndicatorCard
          className={style.card}
          indicator={indicatorId}
          color={cardHighlightColor}
          colorName={props.categoryId}
          value={indicatorValue}
          isCategoryPage
        />
        {lastOne && (
          <a
            className={style.linkWrapper}
            href={`#${getSubCategorySectionId(props.name)}`}
          >
            <span className={style.linkText}>{linkText}</span>
            <span className={style.linkIcon} />
          </a>
        )}
      </div>
    );
  });

  return (
    <div style={{ backgroundColor }} className={style.wrapper}>
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
  categoryId: PropTypes.string.isRequired,
  highlightColorLight: PropTypes.string.isRequired,
  highlightColorDark: PropTypes.string.isRequired,
  summaryIndicatorIds: PropTypes.arrayOf(
    PropTypes.oneOf(Object.keys(INDICATORS)),
  ).isRequired,
  name: PropTypes.string.isRequired,
};

export default SubCategorySummary;
