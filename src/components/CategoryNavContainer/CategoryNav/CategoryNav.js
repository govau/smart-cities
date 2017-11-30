import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Pill from '../../Pill/Pill';
import style from './CategoryNav.scss';
import {
  CATEGORY_IDS,
  NO_CATEGORY,
  NO_CITY,
  ELEMENT_IDS,
  STRINGS,
} from '../../../constants';

const classnames = require('classnames/bind').bind(style);

function scrollElementIntoView(el) {
  el.parentElement.scrollLeft = el.offsetLeft - 40; // eslint-disable-line no-param-reassign
}

class CategoryNav extends Component {
  constructor(props) {
    super(props);

    this.activeElementClassName = style.link__active;
  }

  componentDidMount() {
    const activeEl = document.querySelector(`.${this.activeElementClassName}`);
    // On some pages (e.g. /additional-info) there is no active category)
    if (activeEl) scrollElementIntoView(activeEl);
  }

  render() {
    const isAllCitiesOverview = (
      this.props.cityId === NO_CITY &&
      this.props.categoryId === CATEGORY_IDS.OVERVIEW
    );

    const className = classnames(
      style.wrapper,
      { wrapper__overview: isAllCitiesOverview },
    );

    return (
      <div className={className}>
        <div className={style.categoryNav}>
          <NavLink
            className={style.link}
            activeClassName={this.activeElementClassName}
            to={`/${this.props.cityId}/${NO_CATEGORY}`}
            id={ELEMENT_IDS.OVERVIEW_LINK}
            aria-label={`Overview of ${this.props.cityName}`}
          >
            <Pill
              className={classnames(style.linkText, style.overview)}
              height={28}
            >Overview</Pill>
          </NavLink>

          {this.props.categories.map(category => (
            <NavLink
              className={style.link}
              activeClassName={this.activeElementClassName}
              key={category.id}
              to={`/${this.props.cityId}/${category.id}`}
              onClick={(e) => {
                scrollElementIntoView(e.target.parentElement);
              }}
              aria-label={
                `${category.navName || category.name} in ${this.props.cityName}`
              }
            >
              <Pill
                className={classnames(style.linkText, style[category.colorName])}
                height={28}
              >{ category.navName || category.name }</Pill>
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

CategoryNav.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
  cityId: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  categoryId: PropTypes.string,
};

CategoryNav.defaultProps = {
  cityName: STRINGS.ALL_CITIES,
};

export default CategoryNav;
