import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import CategoryBanner from '../../CategoryBanner/CategoryBanner';
import {
  AGGREGATION_METHODS,
  INDICATORS,
} from '../../../constants';

const AllCitiesCategory = props => (
  <PageWrapper categoryId={props.category.id}>
    <CategoryBanner {...props} />
  </PageWrapper>
);

AllCitiesCategory.propTypes = {
  category: PropTypes.shape({
    colorName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    heroIndicator: PropTypes.shape({
      id: PropTypes.oneOf(Object.keys(INDICATORS)).isRequired,
      aggregationMethod: PropTypes.oneOf(Object.keys(AGGREGATION_METHODS)).isRequired,
    }).isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    indices: PropTypes.object.isRequired,
  })).isRequired,
};

export default AllCitiesCategory;
