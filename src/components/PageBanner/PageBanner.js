/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import IndicatorCard from '../IndicatorCard/IndicatorCard';
import {
  INDICATORS,
  ELEMENT_IDS,
} from '../../constants';
import getColorVariant from '../../helpers/getColorVariant';
import style from './PageBanner.scss';

const PageBanner = (props) => {
  const indicatorCardColor = props.indicatorSubCategory.colorName
    ? getColorVariant(props.indicatorSubCategory.colorName, '500')
    : getColorVariant(props.colorName, '500');

  return (
    <div style={{ backgroundColor: getColorVariant(props.colorName, '020') }}>
      <div className={style.container}>
        <div className={style.textAndIndicator}>
          <div className={style.titleText}>
            <h1
              id={ELEMENT_IDS.INITIAL_FOCUS_POINT_ON_PAGE}
              className={style.title}
            >
              {props.title}

              {props.isAllCitiesCategory && (
                <span className={style.subTitle}> All cities</span>
              )}
            </h1>

            <p className={style.description}>{props.description}</p>
          </div>

          <div>
            <div className={style.heroSubCategoryWrapper}>
              <span className={style.heroSubCategoryText}>
                Key indicator
              </span>

              <span> {props.indicatorSubCategory.name}</span>
            </div>

            <IndicatorCard
              size="large"
              className={style.card}
              color={indicatorCardColor}
              colorName={props.indicatorSubCategory.colorName || props.colorName}
              indicatorId={props.indicatorId}
              cities={props.cities}
              city={props.city}
            />
          </div>
        </div>
        {props.isAllCitiesCategory && (
          <div className={style.featuredTextWrapper}>
            <span className={style.featuredText}>Featured indicators</span>

            <span> Showing range</span>
          </div>
        )}
      </div>
    </div>
  );
};

const cityPropShape = {
  id: PropTypes.string.isRequired,
  indicators: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

PageBanner.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape(cityPropShape)),
  city: PropTypes.shape(cityPropShape),
  colorName: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object, // city descriptions can be JSX
  ]).isRequired,
  indicatorSubCategory: PropTypes.shape({
    name: PropTypes.string,
    colorName: PropTypes.string,
  }).isRequired,
  indicatorId: PropTypes.oneOf(Object.keys(INDICATORS)).isRequired,
  title: PropTypes.string.isRequired,
  isAllCitiesCategory: PropTypes.bool,
};

export default PageBanner;
