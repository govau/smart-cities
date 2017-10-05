import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './CategoryNav.scss';
import { NO_CATEGORY } from '../../../constants';

class CategoryNav extends Component {
  componentDidMount() {
    this.scrollToActiveNavLink();
  }

  componentDidUpdate() {
    this.scrollToActiveNavLink();
  }

  scrollToActiveNavLink() {
    if (this.activeCategoryEl) {
      setTimeout(() => {
        this.el.scrollLeft = this.activeCategoryEl.parentElement.offsetLeft - 20;
      });
    }
  }

  render() {
    return (
      <div ref={(el) => { this.el = el; }} className={style.categoryNav}>
        <NavLink
          className={style.link}
          activeClassName={style.link__active}
          to={`/${this.props.cityId}/${NO_CATEGORY}`}
        >
          <div className={style.overview}>Overview</div>
        </NavLink>

        {this.props.categories.map(category => (
          <NavLink
            className={style.link}
            activeClassName={style.link__active}
            key={category.id}
            to={`/${this.props.cityId}/${category.id}`}
          >
            <div
              className={style[category.colorName]}
              ref={(el) => {
                if (this.props.categoryId === category.id) this.activeCategoryEl = el;
              }}
            >{ category.navName || category.name }</div>
          </NavLink>
        ))}
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
  categoryId: PropTypes.string,
};

export default CategoryNav;
