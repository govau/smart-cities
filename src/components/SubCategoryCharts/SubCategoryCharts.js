import React from 'react';
import PropTypes from 'prop-types';
import getSubCategorySectionId from '../../helpers/getSubCategorySectionId';
import CityColumnChart from '../CityColumnChart/CityColumnChart';
import Icon from '../Icon/Icon';
import { INDICATORS } from '../../constants';
import getColorVariant from '../../helpers/getColorVariant';
import style from './SubCategoryCharts.scss';

const SubCategoryCharts = (props) => {
  const subCategory = props.subCategory;
  let charts = subCategory.charts;

  // SC-140 for Western Sydney, we can hide some charts
  if (props.city) {
    charts = charts.filter((chart) => {
      const firstIndicator = INDICATORS[chart.indicatorIds[0]];

      const hideForThisCity = (
        firstIndicator.hideForCities &&
        firstIndicator.hideForCities.includes(props.city.id)
      );

      return !hideForThisCity;
    });
  }

  const heroChart = charts.find(chart => (
    chart.indicatorIds.includes(props.heroIndicatorId)),
  );

  const otherCharts = charts.filter(chart => (
    !chart.indicatorIds.includes(props.heroIndicatorId)),
  );

  const cardHighlightColor = getColorVariant(props.highlightColorDark);

  return (
    <div className={style.wrapper}>
      <section
        className={style.container}
        id={getSubCategorySectionId(subCategory.name)}
      >
        <header className={style.heading}>
          <Icon
            className={style.iconWrapper}
            size={70}
            icon={subCategory.iconId}
            color={cardHighlightColor}
          />

          <h1 className={style.headingText}>{subCategory.name}</h1>
        </header>
        <div className={style.chartGrid}>
          {heroChart &&
            <div className={style.heroChartWrapper}>
              <CityColumnChart
                chart={heroChart}
                cities={props.cities}
                city={props.city}
                colorBase={props.colorName}
                highlightColorLight={subCategory.highlightColorLight}
                highlightColorDark={subCategory.highlightColorDark}
                isHero
              />
            </div>
          }

          {otherCharts.map(chart => (
            <div
              className={style.chartWrapper}
              key={chart.name}
            >
              <CityColumnChart
                chart={chart}
                cities={props.cities}
                city={props.city}
                colorBase={props.colorName}
                highlightColorLight={subCategory.highlightColorLight}
                highlightColorDark={subCategory.highlightColorDark}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const cityType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  indicators: PropTypes.object.isRequired,
});

SubCategoryCharts.propTypes = {
  subCategory: PropTypes.shape({
    name: PropTypes.string.isRequired,
    charts: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      indicatorIds: PropTypes.arrayOf(
        PropTypes.oneOf(Object.keys(INDICATORS)),
      ).isRequired,
    })),
  }),
  colorName: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(cityType).isRequired,
  city: cityType,
  heroIndicatorId: PropTypes.string.isRequired,
  highlightColorDark: PropTypes.string.isRequired,
};

export default SubCategoryCharts;
