import React from 'react';
import PropTypes from 'prop-types';
import IndicatorCard from '../IndicatorCard/IndicatorCard';
import PageLegend from '../PageLegend/PageLegend';
import { INDICATORS } from '../../constants';
import getMinAndMaxForIndicator from '../../helpers/getMinAndMaxForIndicator';
import getColorVariant from '../../helpers/getColorVariant';
import style from './PageBanner.scss';

const PageBanner = (props) => {
  const backgroundColor = getColorVariant(props.colorName, '020');
  const cardHighlightColor = getColorVariant(props.colorName, '500');
  const indicatorValue = props.city
    ? props.city.indicators[props.indicator]
    : getMinAndMaxForIndicator(
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
            isContextPage={props.isContextPage}
          />
        </div>
      </div>

      <PageLegend
        isContextPage={props.isContextPage}
        colorName={props.colorName}
        isAllCitiesPage={!props.city}
      />
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
  description: PropTypes.string.isRequired,
  indicator: PropTypes.oneOf(Object.keys(INDICATORS)).isRequired,
  title: PropTypes.string.isRequired,
  isContextPage: PropTypes.bool,
};

export default PageBanner;
