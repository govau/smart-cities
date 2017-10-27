import React from 'react';
import PropTypes from 'prop-types';
import CategoryNavContainer from '../CategoryNavContainer/CategoryNavContainer';
import CityHeader from '../CityHeader/CityHeader';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import Pill from '../Pill/Pill';
import { LINKS } from '../../constants';
import dtaLogo from './dta-logo.svg';
import star from './star-white.svg';
import style from './Header.scss';

const Header = props => (
  <header>
    <div className={style.govContainer}>
      <HamburgerButton
        className={style.hamburger}
        onClick={props.openNav}
        label="open navigation menu"
      />

      <img className={style.star} src={star} alt="star icon" />
      <span className={style.govAu}>GOV.AU</span>
      <span className={style.govWebsite}>Official Australian Government Website</span>
      <div className={style.compactTitle}>Smart Cities</div>
      <div className={style.compactSubtitle}>Performance Dashboard</div>
    </div>
    <div className={style.mainContainer}>
      <div className={style.titleContainer}>
        <Pill className={style.projectStatus}>ALPHA</Pill>
        <h1 className={style.title}>Smart Cities Performance Dashboard</h1>
        <div className={style.subtitle}>Smart Cities Performance Framework</div>
      </div>
      <div className={style.orgContainer}>
        <a className={style.orgLink} href={LINKS.ORG}>
          <img className={style.orgLogo} src={dtaLogo} alt="DTA logo" />
        </a>
        <a className={style.contactLink} href={LINKS.CONTACT_US}>Contact us</a>
      </div>
    </div>

    {props.cityName && (
      <CityHeader
        cityName={props.cityName}
        categoryColorName={props.categoryColorName}
        categoryIconId={props.categoryIconId}
      />
    )}

    <CategoryNavContainer
      // pass in categoryId so the nav updates when the category changes
      categoryId={props.categoryId}
      cityId={props.cityId}
    />
  </header>
);

Header.propTypes = {
  cityId: PropTypes.string.isRequired,
  cityName: PropTypes.string,
  categoryColorName: PropTypes.string,
  categoryIconId: PropTypes.string,
  categoryId: PropTypes.string.isRequired,
  openNav: PropTypes.func.isRequired,
};

export default Header;
