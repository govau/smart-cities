import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './CityNav.scss';
import { NO_CITY } from '../../../constants';

const CityNav = props => (
  <div>
    <NavLink
      className={style.link}
      activeClassName={style.link__active}
      to={`/${NO_CITY}/${props.categoryId}`}
    >All Cities</NavLink>

    {props.cities.map(city => (
      <NavLink
        className={style.link}
        activeClassName={style.link__active}
        key={city.id}
        to={`/${city.id}/${props.categoryId}`}
      >{city.name}</NavLink>
    ))}
  </div>
);

CityNav.propTypes = {
  categoryId: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
};

export default CityNav;
