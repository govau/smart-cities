import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import IndicatorCard from '../Card/IndicatorCard/IndicatorCard';
import Icon from '../Icon/Icon';
import aggregateIndicatorForCities from '../../helpers/aggregateIndicatorForCities';
import getColorVariant from '../../helpers/getColorVariant';
import {
  INDICATORS,
  NO_CITY,
} from '../../constants';
import style from './CategoryIndicator.scss';

const CategoryIndicator = (props) => {
  const categoryColor = getColorVariant(props.category.colorName, '500');
  const cityIdForUrl = props.city ? props.city.id : NO_CITY;
  const indicatorValue = props.city
    ? props.city.indices[props.category.heroIndicatorId]
    : aggregateIndicatorForCities(
      props.category.heroIndicatorId,
      props.cities,
    );

  return (
    <div className={props.className}>
      <div className={style.iconAndCard}>
        <Icon
          className={style.categoryIcon}
          color={categoryColor}
          icon={props.category.iconId}
          size={70}
        />

        <div className={style.categoryName}>
          {props.category.name}
        </div>

        <IndicatorCard
          className={style.card}
          indicator={props.category.heroIndicatorId}
          color={categoryColor}
          colorName={props.category.colorName}
          value={indicatorValue}
        />
      </div>

      <NavLink
        to={`/${cityIdForUrl}/${props.category.id}`}
        className={style.viewLink}
      >
        View {props.category.name}
      </NavLink>
    </div>
  );
};

const cityPropShape = {
  id: PropTypes.string.isRequired,
  indices: PropTypes.object.isRequired,
};

CategoryIndicator.propTypes = {
  category: PropTypes.shape({
    colorName: PropTypes.string.isRequired,
    heroIndicatorId: PropTypes.oneOf(Object.keys(INDICATORS)).isRequired,
    id: PropTypes.string.isRequired,
    iconId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  city: PropTypes.shape(cityPropShape),
  cities: PropTypes.arrayOf(PropTypes.shape(cityPropShape)),
  className: PropTypes.string,
};

export default CategoryIndicator;
