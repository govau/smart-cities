/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import style from './Footer.scss';
import getSubCategorySectionId from '../../../helpers/getSubCategorySectionId';
import {
  ELEMENT_IDS,
  LINKS,
  STRINGS,
  EMAIL_ADDRESSES,
} from '../../../constants';
import Link from '../../Link/Link';
{ /* import logo from '../../../images/crest1.png';  */ }
{ /* import dtaLogo from '../../../images/crest1.png'; */ }
const links = [
  {
    text: STRINGS.PRIVACY_LINK,
    href: `${LINKS.ADDITIONAL_INFORMATION}#${ELEMENT_IDS.PRIVACY_POLICY}`,
  },
  {
    text: STRINGS.ACCESSIBILITY_LINK,
    href: `${LINKS.ADDITIONAL_INFORMATION}#${ELEMENT_IDS.ACCESSIBILITY}`,
  },
  {
    text: STRINGS.SECURITY_LINK,
    href: `${LINKS.ADDITIONAL_INFORMATION}#${ELEMENT_IDS.SECURITY}`,
  },
  {
    text: STRINGS.CONTENT_CREDIT,
    href: `${LINKS.ADDITIONAL_INFORMATION}#${ELEMENT_IDS.CONTENT_CREDIT}`,
  },
];

const Footer = props => (
  <footer className={style.wrapper}>
    <div className={style.container}>
 
      <div className={style.wordsWrapper}>
        {!!props.category && (
          <div className={style.categoryDetailsWrapper}>
            <p className={style.categoryTitle}>
              {props.category.name}
            </p>

            <div className={style.subCategoryLinksWrapper}>
              {props.category.subCategories.map(subCategory => (
                <a
                  key={subCategory.name}
                  className={style.subCategoryLink}
                  href={`#${getSubCategorySectionId(subCategory.name)}`}
                >
                  {subCategory.name}
                </a>
              ))}
            </div>
          </div>
        )}

        <div className={style.footerLinks}>
          <div className={style.footerLinksRow}>
		  <a href="https://infrastructure.gov.au/utilities/feedback.aspx">Give feedback</a>&#160; &#160; 
            {links.map(link => (
              <NavLink
                key={link.href}
                to={link.href}
                className={style.staticLink}
              >{link.text}</NavLink>
            ))}
          </div>

          <div className={style.footerLinksRow}>
            {STRINGS.CONTACT}
            {': '}
            <a
              href={`mailto:${EMAIL_ADDRESSES.CITY_PERFORMANCE}?subject=${STRINGS.CONTACT_SUBJECT}`}
            >{EMAIL_ADDRESSES.CITY_PERFORMANCE}</a>
          </div>

          <div className={style.footerLinksRow}>
            <Link href={LINKS.RAW_DATA} unstyled>{STRINGS.RAW_DATA}</Link>
          </div>
        </div>

        <div className={style.copyright}>
          {STRINGS.COPYRIGHT}
        </div>
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    subCategories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })).isRequired,
  }),
};

export default Footer;
