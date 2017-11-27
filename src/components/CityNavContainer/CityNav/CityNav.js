import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { NO_CITY, NO_CATEGORY } from '../../../constants';
import style from './CityNav.scss';

const classnames = require('classnames/bind').bind(style);

const CityNav = (props) => {
  const className = classnames({
    [style.citySelected]: props.cityId !== NO_CITY,
  });

  const locationHasCity = (location, city) => (
    location &&
    location.pathname &&
    location.pathname.startsWith(`/${city}/`));

  return (
    <div className={className}>
      <NavLink
        className={classnames(style.link, style.allCitiesLink)}
        activeClassName={style.link__active}
        isActive={(match, location) => locationHasCity(location, NO_CITY)}
        to={`/${NO_CITY}/${NO_CATEGORY}`}
      >
        All Cities
      </NavLink>

      {props.cities.map(city => (
        <NavLink
          key={city.id}
          className={classnames(style.link, style.cityLink)}
          activeClassName={style.link__active}
          isActive={(match, location) => locationHasCity(location, city.id)}
          to={`/${city.id}/${NO_CATEGORY}`}
        >{city.name}</NavLink>
      ))}
    </div>
  );
};

CityNav.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  cityId: PropTypes.string.isRequired,
};

export default CityNav;
