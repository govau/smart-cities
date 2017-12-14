import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';
import IndicatorCard from '../IndicatorCard/IndicatorCard';
import Pill from '../Pill/Pill';
import getColorVariant from '../../helpers/getColorVariant';
import getSubCategorySectionId from '../../helpers/getSubCategorySectionId';
import getSubCategoryOfHeroIndicator from '../../helpers/getSubCategoryOfHeroIndicator';
import {
  CATEGORY_IDS,
  INDICATORS,
  NO_CITY,
  STRINGS,
} from '../../constants';
import COLORS from '../../style/_colors.scss';
import style from './CategoryOverview.scss';

const CategoryOverview = (props) => {
  const isContextCategory = props.category.id === CATEGORY_IDS.CONTEXT;

  const categoryDarkColor = getColorVariant(props.category.colorName, '700');
  const categoryLightColor = isContextCategory
    ? COLORS.WHITE
    : getColorVariant(props.category.colorName, '040');

  const categoryLinkStyle = isContextCategory
    ? {
      background: COLORS.WHITE,
      border: `2px solid ${COLORS.GREY_700}`,
      color: COLORS.GREY_700,
    }
    : {
      background: categoryDarkColor,
      border: `2px solid ${categoryDarkColor}`,
      color: COLORS.WHITE,
    };

  const categoryColor = isContextCategory ? COLORS.GREY_600 : categoryDarkColor;
  const cityUrlPart = props.city ? props.city.id : NO_CITY;
  const categoryUrl = `/${cityUrlPart}/${props.category.id}`;

  const indicatorCardColorName = isContextCategory
    ? getSubCategoryOfHeroIndicator(props.category).colorName
    : props.category.colorName;

  const indicatorCardColor = isContextCategory
    ? getColorVariant(indicatorCardColorName, '500')
    : categoryDarkColor;

  return (
    <div
      className={style.categoryWrapper}
      style={{ background: categoryLightColor }}
    >
      <div className={style.category}>
        <div className={style.categoryIcon}>
          <Icon
            icon={props.category.iconId}
            color={categoryColor}
          />
        </div>

        <div className={style.textAndIndicatorWrapper}>
          <div className={style.categoryTextWrapperWrapper}>
            <div className={style.categoryTextWrapper}>
              <h2 className={style.categoryTitle}>{props.category.name}</h2>

              <p className={style.categoryDescription}>
                {isContextCategory && props.cities
                  ? props.category.allCitiesShortDescription
                  : props.category.shortDescription
                }
              </p>

              <p className={style.subCategoryWrapperText}>{STRINGS.CATEGORIES_INCLUDE}</p>

              <div>
                {props.category.subCategories.map((subCategory) => {
                  const url = `/${cityUrlPart}/${props.category.id}#${getSubCategorySectionId(subCategory.name)}`;

                  const pillStyle = isContextCategory ? {
                    background: COLORS[subCategory.highlightColorLight],
                    borderColor: getColorVariant(subCategory.highlightColorDark),
                  } : null;

                  return (
                    <NavLink
                      key={subCategory.name}
                      to={url}
                    >
                      <Pill
                        className={style.subCategoryLink}
                        style={pillStyle}
                        shadow={!isContextCategory}
                      >
                        {subCategory.name}
                      </Pill>
                    </NavLink>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={style.indicatorCardAndLink}>
            <div className={style.indicatorCards}>
              {props.category.overviewIndicatorIds.map(indicatorId => (
                <IndicatorCard
                  key={indicatorId}
                  className={style.indicatorCard}
                  color={indicatorCardColor}
                  colorName={indicatorCardColorName}
                  indicatorId={indicatorId}
                  cities={props.cities}
                  city={props.city}
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
                shadow={isContextCategory}
              >
                <span className={style.categoryLinkText}>
                  {props.category.navName || props.category.name} section
                </span>

                <Icon
                  icon={isContextCategory ? 'rightArrowInCircle' : 'rightArrowInCircleInverted'}
                  size={20}
                  color={categoryColor}
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
  indicators: PropTypes.object.isRequired,
};

CategoryOverview.propTypes = {
  category: PropTypes.shape({
    colorName: PropTypes.string.isRequired,
    shortDescription: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object, // descriptions can be JSX
    ]).isRequired,
    allCitiesShortDescription: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object, // descriptions can be JSX
    ]),
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
