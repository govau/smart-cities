import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import PageBanner from '../../PageBanner/PageBanner';
import SubCategorySummary from '../../SubCategorySummary/SubCategorySummary';
import style from './CityCategory.scss';

const CityCategory = (props) => {
  const title = `I am the "${props.category.name}" page for "${props.city.name}"`;

  return (
    <PageWrapper
      cityId={props.city.id}
      categoryId={props.category.id}
      cityName={props.city.name}
      categoryColorName={props.category.colorName}
    >
      <PageBanner
        colorName={props.category.colorName}
        description={props.category.description}
        indicator={props.category.heroIndicatorId}
        title={props.category.name}
        cities={props.cities}
        isCategoryPage
      />

      {props.category.subCategories.map(subCategory => (
        <SubCategorySummary
          key={subCategory.name}
          {...subCategory}
          colorName={props.category.colorName}
          city={props.city}
        />
      ))}

      <div className={style.main}>
        <h1>{title}</h1>

        <pre>{JSON.stringify(props.category, null, 2)}</pre>
        <pre>{JSON.stringify(props.cities, null, 2)}</pre>
      </div>
    </PageWrapper>
  );
};

CityCategory.propTypes = {
  category: PropTypes.shape({
    colorName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    heroIndicatorId: PropTypes.string.isRequired,
    subCategories: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      indicatorIds: PropTypes.arrayOf(PropTypes.string).isRequired,
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
