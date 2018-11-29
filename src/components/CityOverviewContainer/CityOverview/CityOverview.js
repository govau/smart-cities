/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import CategoryOverviews from '../../CategoryOverviews/CategoryOverviews';
import PageBanner from '../../PageBanner/PageBanner';
import PageWrapper from '../../PageWrapper/PageWrapper';
import {
  HERO_INDICATOR_ID,
  HERO_INDICATOR_CATEGORY,
  HERO_INDICATOR_COLOR_NAME,
} from '../../../constants';

const CityOverview = props => (
  <PageWrapper
    cityId={props.city.id}
    cityName={props.city.name}
    categoryColorName="primary"
  >
    <PageBanner
      colorName="primary"
      description={props.city.description}
      indicatorId={HERO_INDICATOR_ID}
      indicatorSubCategory={{
        name: HERO_INDICATOR_CATEGORY,
        colorName: HERO_INDICATOR_COLOR_NAME,
      }}
      title={props.city.name}
      city={props.city}
    />

    <CategoryOverviews city={props.city} />
  </PageWrapper>
);

CityOverview.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object, // descriptions can be JSX
    ]).isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CityOverview;
