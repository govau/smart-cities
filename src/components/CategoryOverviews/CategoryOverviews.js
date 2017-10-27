import React from 'react';
import PropTypes from 'prop-types';
import CategoryOverview from '../CategoryOverview/CategoryOverview';
import Icon from '../Icon/Icon';
import { CATEGORIES } from '../../constants';
import COLORS from '../../style/_colors.scss';
import style from './CategoryOverviews.scss';

const CategoryOverviews = props => (
  <div>
    <div className={style.indicatorTypeMarkWrapper}>
      <div className={style.indicatorTypeMarkContainer}>
        <Icon
          className={style.indicatorTypeMark}
          color={COLORS.OVERVIEW_900}
          icon="indicatorTypeMarkSolid"
          size={22}
        />

        Performance indicators
      </div>
    </div>

    {CATEGORIES.map(category => (
      <CategoryOverview
        key={category.id}
        category={category}
        cities={props.cities}
        city={props.city}
      />
    ))}

    <div className={style.footerSpacerWrapper}>
      <div className={style.footerSpacerContainer}>
        <div className={style.footerSpacerLine} />
      </div>
    </div>
    <div className={style.footerSpacerShade} />
  </div>
);

const cityPropShape = {
  id: PropTypes.string.isRequired,
  indices: PropTypes.object.isRequired,
};

CategoryOverviews.propTypes = {
  city: PropTypes.shape(cityPropShape),
  cities: PropTypes.arrayOf(PropTypes.shape(cityPropShape)),
};

export default CategoryOverviews;
