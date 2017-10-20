import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import PageBanner from '../../PageBanner/PageBanner';
import SubCategorySummary from '../../SubCategorySummary/SubCategorySummary';
import { CATEGORY_IDS } from '../../../constants';

const CityCategory = props => (
  <PageWrapper
    cityId={props.city.id}
    categoryId={props.category.id}
    cityName={props.city.name}
    categoryColorName={props.category.colorName}
    categoryIconId={props.category.iconId}
  >
    <PageBanner
      colorName={props.category.colorName}
      description={props.category.description}
      indicator={props.category.heroIndicatorId}
      title={props.category.name}
      cities={props.cities}
      isCategoryPage
      isContextPage={props.category.id === CATEGORY_IDS.CONTEXT}
    />

    {props.category.subCategories.map(subCategory => (
      <SubCategorySummary
        key={subCategory.name}
        {...subCategory}
        categoryId={props.category.id}
        city={props.city}
      />
    ))}
  </PageWrapper>
);

CityCategory.propTypes = {
  category: PropTypes.shape({
    colorName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    iconId: PropTypes.string,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    heroIndicatorId: PropTypes.string.isRequired,
    subCategories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      summaryIndicatorIds: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
  }).isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  toggleCitySelected: PropTypes.func.isRequired,
};

export default CityCategory;
