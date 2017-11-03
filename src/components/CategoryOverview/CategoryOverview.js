import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import IndicatorCard from '../Card/IndicatorCard/IndicatorCard';
import Pill from '../Pill/Pill';
import getMinAndMaxForIndicator from '../../helpers/getMinAndMaxForIndicator';
import getColorVariant from '../../helpers/getColorVariant';
import getSubCategorySectionId from '../../helpers/getSubCategorySectionId';
import {
  CATEGORY_IDS,
  INDICATORS,
  NO_CITY,
  STRINGS,
} from '../../constants';
import COLORS from '../../style/_colors.scss';
import style from './CategoryOverview.scss';

const classnames = require('classnames/bind').bind(style);

const CategoryOverview = (props) => {
  const isContextCategory = props.category.id === CATEGORY_IDS.CONTEXT;

  const indicators = props.category.overviewIndicatorIds.map((indicatorId) => {
    const value = props.city
      ? props.city.indices[indicatorId]
      : getMinAndMaxForIndicator(indicatorId, props.cities);

    return { id: indicatorId, value };
  });

  const categoryDarkColor = getColorVariant(props.category.colorName, '500');
  const categoryLightColor = isContextCategory
    ? COLORS.WHITE
    : getColorVariant(props.category.colorName, '040');

  const categoryLinkStyle = isContextCategory
    ? {
      background: COLORS.WHITE,
      border: `2px solid ${categoryDarkColor}`,
      color: COLORS.GREY_700,
    }
    : {
      background: categoryDarkColor,
      border: `2px solid ${categoryDarkColor}`,
      color: COLORS.WHITE,
    };

  const cityUrlPart = props.city ? props.city.id : NO_CITY;
  const categoryUrl = `/${cityUrlPart}/${props.category.id}`;


  const className = classnames(
    style.categoryWrapper,
    { category__context: isContextCategory },
  );

  return (
    <div
      className={className}
      style={{ background: categoryLightColor }}
    >
      <div className={style.category}>
        {!isContextCategory && (
          <div className={style.categoryIcon}>
            <Icon
              icon={props.category.iconId}
              color={categoryDarkColor}
            />
          </div>
        )}

        <div className={style.textAndIndicatorWrapper}>
          <div className={style.categoryTextWrapper}>
            <h2 className={style.categoryTitle}>{props.category.name}</h2>

            <p className={style.categoryDescription}>{props.category.shortDescription}</p>

            <p className={style.subCategoryWrapperText}>{STRINGS.SUB_CATS_INCLUDE}</p>

            <div>
              {props.category.subCategories.map((subCategory) => {
                const url = `/${cityUrlPart}/${props.category.id}#${getSubCategorySectionId(subCategory.name)}`;

                return (
                  <NavLink
                    key={subCategory.name}
                    to={url}
                  >
                    <Pill className={style.subCategoryLink} shadow>
                      {subCategory.name}
                    </Pill>
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div className={style.indicatorCardAndLink}>
            <div className={style.indicatorCards}>
              {indicators.map(indicator => (
                <IndicatorCard
                  key={indicator.id}
                  className={style.indicatorCard}
                  color={categoryDarkColor}
                  colorName={props.category.colorName}
                  indicator={indicator.id}
                  value={indicator.value}
                />
              ))}
            </div>

            <NavLink
              to={categoryUrl}
              className={style.categoryLinkWrapper}
            >
              <Pill
                className={style.categoryLinkPill}
                style={categoryLinkStyle}
                height={30}
              >
                <span className={style.categoryLinkText}>
                  {props.category.navName || props.category.name} section
                </span>

                <Icon
                  icon={isContextCategory ? 'rightArrowInCircle' : 'rightArrowInCircleInverted'}
                  size={20}
                  color={categoryDarkColor}
                />
              </Pill>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const cityPropShape = {
  id: PropTypes.string.isRequired,
  indices: PropTypes.object.isRequired,
};

CategoryOverview.propTypes = {
  category: PropTypes.shape({
    colorName: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    overviewIndicatorIds: PropTypes.arrayOf(PropTypes.oneOf(Object.keys(INDICATORS))).isRequired,
    id: PropTypes.string.isRequired,
    iconId: PropTypes.string,
    name: PropTypes.string.isRequired,
    navName: PropTypes.string,
    subCategories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
  }).isRequired,
  city: PropTypes.shape(cityPropShape),
  cities: PropTypes.arrayOf(PropTypes.shape(cityPropShape)),
  className: PropTypes.string,
};

export default CategoryOverview;
