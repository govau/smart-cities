import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './CityNav.scss';
import { NO_CITY } from '../../../constants';

const classnames = require('classnames/bind').bind(style);

const CityNav = (props) => {
  const className = classnames({
    [style.citySelected]: props.cityId !== NO_CITY,
  });

  return (
    <div className={className}>
      <NavLink
        className={classnames(style.link, style.allCitiesLink)}
        activeClassName={style.link__active}
        to={`/${NO_CITY}/${props.categoryId}`}
      >
        All Cities

        <span className={style.cityCount}>
          {props.cities.length}
        </span>
      </NavLink>

      {props.cities.map(city => (
        <NavLink
          key={city.id}
          className={classnames(style.link, style.cityLink)}
          activeClassName={style.link__active}
          to={`/${city.id}/${props.categoryId}`}
        >{city.name}</NavLink>
      ))}
    </div>
  );
};

CityNav.propTypes = {
  categoryId: PropTypes.string.isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  cityId: PropTypes.string.isRequired,
};

export default CityNav;
