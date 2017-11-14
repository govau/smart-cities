import React from 'react';
import PropTypes from 'prop-types';
import style from './Footer.scss';
import getSubCategorySectionId from '../../../helpers/getSubCategorySectionId';
import {
  ELEMENT_IDS,
  LINKS,
  STRINGS,
} from '../../../constants';
import coaWhite from '../../../images/coa-white.svg';
import dtaLogo from './dtaLogo.svg';

const links = [
  {
    text: STRINGS.FEEDBACK_LINK,
    href: LINKS.FEEDBACK,
  },
  {
    text: STRINGS.PRIVACY_LINK,
    href: `${LINKS.ADDITIONAL_INFORMATION}#${ELEMENT_IDS.PRIVACY_POLICY}`,
  },
  {
    text: STRINGS.HELP_LINK,
    href: LINKS.CONTACT_US,
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
      <div className={style.logosWrapper}>
        <div className={style.coaWrapper}>
          <img
            className={style.coaLogo}
            src={coaWhite}
            alt="coat of arms"
          />
        </div>

        <div className={style.logoDivider} />

        <img
          className={style.dtaLogo}
          src={dtaLogo}
          alt="dta"
        />
      </div>

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

        <div className={style.staticLinksWrapper}>
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={style.staticLink}
            >{link.text}</a>
          ))}
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
