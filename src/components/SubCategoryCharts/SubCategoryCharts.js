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

  const heroChart = subCategory.charts.find(chart => (
    chart.indicatorIds.includes(props.heroIndicatorId)),
  );

  const otherCharts = subCategory.charts.filter(chart => (
    !chart.indicatorIds.includes(props.heroIndicatorId)),
  );

  const cardHighlightColor = getColorVariant(props.highlightColorDark);

  return (
    <div
      className={style.wrapper}
      id={getSubCategorySectionId(subCategory.name)}
    >
      <div className={style.container}>
        <div className={style.heading}>
          <Icon
            className={style.iconWrapper}
            size={70}
            icon={subCategory.iconId}
            color={cardHighlightColor}
          />

          <h3 className={style.headingText}>{subCategory.name}</h3>
        </div>
        <div className={style.chartGrid}>
          {heroChart &&
            <div className={style.heroChartWrapper}>
              <CityColumnChart
                title={heroChart.name}
                longDescription={heroChart.longDescription}
                cities={props.cities}
                city={props.city}
                colorBase={props.colorName}
                highlightColorLight={subCategory.highlightColorLight}
                highlightColorDark={subCategory.highlightColorDark}
                indicatorIds={heroChart.indicatorIds}
                stacked={heroChart.stacked}
              />
            </div>
          }

          {otherCharts.map(chart => (
            <div
              className={style.chartWrapper}
              key={chart.name}
            >
              <CityColumnChart
                title={chart.name}
                longDescription={chart.longDescription}
                cities={props.cities}
                city={props.city}
                colorBase={props.colorName}
                highlightColorLight={subCategory.highlightColorLight}
                highlightColorDark={subCategory.highlightColorDark}
                indicatorIds={chart.indicatorIds}
                stacked={chart.stacked}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const cityType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  indices: PropTypes.object.isRequired,
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
