import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import PageBanner from '../../PageBanner/PageBanner';
import SubCategorySummary from '../../SubCategorySummary/SubCategorySummary';
import SubCategoryCharts from '../../SubCategoryCharts/SubCategoryCharts';
import getSubCategoryOfHeroIndicator from '../../../helpers/getSubCategoryOfHeroIndicator';
import { INDICATORS } from '../../../constants';

const AllCitiesCategory = props => (
  <PageWrapper categoryId={props.category.id}>
    <PageBanner
      colorName={props.category.colorName}
      description={props.category.description}
      indicatorId={props.category.heroIndicatorId}
      indicatorSubCategory={getSubCategoryOfHeroIndicator(props.category)}
      title={props.category.name}
      cities={props.cities}
      isAllCitiesCategory
    />

    {props.category.subCategories.map(subCategory => (
      <SubCategorySummary
        key={subCategory.name}
        {...subCategory}
        categoryColorName={subCategory.colorName || props.category.colorName}
        cities={props.cities}
      />
    ))}

    {props.category.subCategories.map(subCategory => (
      <SubCategoryCharts
        key={subCategory.name}
        subCategory={subCategory}
        colorName={subCategory.colorName || props.category.colorName}
        cities={props.cities}
        heroIndicatorId={props.category.heroIndicatorId}
        highlightColorDark={subCategory.highlightColorDark}
        setShowChartPatterns={props.setShowChartPatterns}
        showChartPatterns={props.showChartPatterns}
      />
    ))}
  </PageWrapper>
);

AllCitiesCategory.propTypes = {
  category: PropTypes.shape({
    colorName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    heroIndicatorId: PropTypes.oneOf(Object.keys(INDICATORS)).isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subCategories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      colorName: PropTypes.string,
      charts: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        indicatorIds: PropTypes.arrayOf(
          PropTypes.oneOf(Object.keys(INDICATORS)),
        ).isRequired,
      })),
    })).isRequired,
  }).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    indicators: PropTypes.object.isRequired,
  })).isRequired,
  setShowChartPatterns: PropTypes.func.isRequired,
  showChartPatterns: PropTypes.bool.isRequired,
};

export default AllCitiesCategory;
