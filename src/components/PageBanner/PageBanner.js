import React from 'react';
import PropTypes from 'prop-types';
import IndicatorCard from '../Card/IndicatorCard/IndicatorCard';
import Icon from '../Icon/Icon';
import { INDICATORS } from '../../constants';
import aggregateIndicatorForCities from '../../helpers/aggregateIndicatorForCities';
import getColorVariant from '../../helpers/getColorVariant';
import style from './PageBanner.scss';

const PageBanner = (props) => {
  const backgroundColor = getColorVariant(props.colorName, '020');
  const cardHighlightColor = getColorVariant(props.colorName, '500');
  const pColor = getColorVariant(props.colorName, '900');
  const indicatorValue = props.city
    ? props.city.indices[props.indicator]
    : aggregateIndicatorForCities(
      props.indicator,
      props.cities,
    );

  return (
    <div style={{ backgroundColor }}>
      <div className={style.container}>
        <div className={style.textAndIndicator}>
          <div className={style.titleText}>
            <h1 className={style.title}>{props.title}</h1>

            <p className={style.description}>{props.description}</p>
          </div>

          <IndicatorCard
            size="large"
            className={style.card}
            color={cardHighlightColor}
            colorName={props.colorName}
            indicator={props.indicator}
            value={indicatorValue}
            isCategoryPage={props.isCategoryPage}
          />
        </div>

        {!props.isContextPage && (
          <div className={style.indicatorTypeMarkWrapper}>
            <Icon
              className={style.indicatorTypeMark}
              color={pColor}
              icon={props.isCategoryPage ? 'indicatorTypeMarkSolid' : 'indicatorTypeMarkBorder'}
              size={22}
            />

            Performance indicators
          </div>
        )}
      </div>
    </div>
  );
};

const cityPropShape = {
  id: PropTypes.string.isRequired,
  indices: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

PageBanner.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape(cityPropShape)),
  city: PropTypes.shape(cityPropShape),
  colorName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  indicator: PropTypes.oneOf(Object.keys(INDICATORS)).isRequired,
  title: PropTypes.string.isRequired,
  isCategoryPage: PropTypes.bool,
  isContextPage: PropTypes.bool,
};

export default PageBanner;
