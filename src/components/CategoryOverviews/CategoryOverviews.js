import React from 'react';
import PropTypes from 'prop-types';
import CategoryOverview from '../CategoryOverview/CategoryOverview';
import { CATEGORIES } from '../../constants';
import style from './CategoryOverviews.scss';

const CategoryOverviews = props => (
  <div>
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
