import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './CategoryNav.scss';
import { NO_CATEGORY } from '../../../constants';

const CategoryNav = props => (
  <div>
    <NavLink
      className={style.link}
      activeClassName={style.link__active}
      to={`/${props.cityId}/${NO_CATEGORY}`}
    >Overview</NavLink>

    {props.categories.map(category => (
      <NavLink
        className={style.link}
        activeClassName={style.link__active}
        key={category.id}
        to={`/${props.cityId}/${category.id}`}
      > {category.name} </NavLink>
    ))}
  </div>
);

CategoryNav.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  cityId: PropTypes.string.isRequired,
};

export default CategoryNav;
