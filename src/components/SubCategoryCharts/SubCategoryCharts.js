/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import kebabCase from 'lodash/kebabCase';
import CityColumnChart from '../CityColumnChart/CityColumnChart';
import Icon from '../Icon/Icon';
import Toggle from '../Toggle/Toggle';
import getSubCategorySectionId from '../../helpers/getSubCategorySectionId';
import getColorVariant from '../../helpers/getColorVariant';
import getColorRange from '../../helpers/getColorRange';
import { INDICATORS } from '../../constants';
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

  // This component renders out the chart patterns which require the colours
  // that are going to be required within the charts
  const colorRange = getColorRange(props.colorName);
  const svgPatternBase = `svg-pattern-${kebabCase(subCategory.name)}`;

  return (
    <div className={style.wrapper}>
      <section
        className={style.container}
        id={getSubCategorySectionId(subCategory.name)}
      >
        <header
          className={style.heading}
          style={{
            background: getColorVariant(props.colorName, '040'),
          }}
        >
          <Icon
            className={style.iconWrapper}
            size={70}
            icon={subCategory.iconId}
            color={cardHighlightColor}
          />

          <h1 className={style.headingText}>{subCategory.name}</h1>

          <Toggle
            className={style.patternToggle}
            id={`chart-pattern-checkbox-${kebabCase(subCategory.name)}`}
            label="Make charts more accessible"
            onChange={props.setShowChartPatterns}
            checked={props.showChartPatterns}
            colorName={props.colorName}
          />
        </header>

        <div className={style.chartGrid}>
          {heroChart && (
            <div className={style.heroChartWrapper}>
              <CityColumnChart
                chart={heroChart}
                cities={props.cities}
                city={props.city}
                colorBase={props.colorName}
                highlightColorLight={subCategory.highlightColorLight}
                highlightColorDark={subCategory.highlightColorDark}
                showChartPatterns={props.showChartPatterns}
                svgPatternBase={svgPatternBase}
                isHero
              />
            </div>
          )}

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
                showChartPatterns={props.showChartPatterns}
                svgPatternBase={svgPatternBase}
              />
            </div>
          ))}
        </div>
      </section>

      {/* This renders the svg <pattern>s that will be referenced by the charts */}
      {/* but only renders them if the charts are going to require them */}
      {props.showChartPatterns && (
        <svg width="0" height="0">
          <defs>
            <pattern
              id={`${svgPatternBase}-3`}
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
            >
              {/* not a pattern, just a solid colour */}
              <rect width="4" height="4" fill={colorRange[3]} />
            </pattern>

            <pattern
              id={`${svgPatternBase}-0`}
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
            >
              {/* horizontal lines */}
              <rect width="4" height="3" fill={colorRange[0]} />
              <rect width="4" height="1" y="3" fill={colorRange[3]} />
            </pattern>

            <pattern
              id={`${svgPatternBase}-1`}
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
            >
              {/* checkerboard pattern */}
              <rect width="4" height="4" fill={colorRange[1]} />
              <rect width="2" height="2" fill={colorRange[3]} />
            </pattern>

            <pattern
              id={`${svgPatternBase}-2`}
              width="4"
              height="4"
              patternUnits="userSpaceOnUse"
            >
              {/* vertical lines */}
              <rect width="3" height="4" fill={colorRange[2]} />
              <rect width="1" height="4" x="3" fill={colorRange[3]} />
            </pattern>
          </defs>
        </svg>
      )}
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
  }).isRequired,
  cities: PropTypes.arrayOf(cityType).isRequired,
  city: cityType,
  colorName: PropTypes.string.isRequired,
  heroIndicatorId: PropTypes.string.isRequired,
  highlightColorDark: PropTypes.string.isRequired,
  setShowChartPatterns: PropTypes.func.isRequired,
  showChartPatterns: PropTypes.bool.isRequired,
};

export default SubCategoryCharts;
