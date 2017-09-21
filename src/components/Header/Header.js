import React from 'react';
import PropTypes from 'prop-types';
import CategoryNavContainer from '../CategoryNavContainer/CategoryNavContainer';

import style from './Header.scss';

const Header = props => (
  <header className={style.header}>
    <div className={style.header_govau_container}>
      <span>*STAR*</span>
      <strong>GOV.AU</strong>
      <span>Official Australian Government Website</span>
    </div>
    <div className={style.header_project_status_container}>
      <div className={style.header_project_status}>BETA</div>
    </div>
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
