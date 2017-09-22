import React from 'react';
import PropTypes from 'prop-types';
import CategoryNavContainer from '../CategoryNavContainer/CategoryNavContainer';

import style from './Header.scss';

const Header = props => (
  <header className={style.wrapper}>
    <h1 className={style.title}>Header</h1>

    <CategoryNavContainer
      // pass in categoryId so the nav updates when the category changes
      categoryId={props.categoryId}
      cityId={props.cityId}
    />
  </header>
);

Header.propTypes = {
  cityId: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
};

export default Header;
