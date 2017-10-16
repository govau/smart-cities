import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import OverviewSection from '../../OverviewSection/OverviewSection';

const AllCitiesOverview = props => (
  <PageWrapper>
    <OverviewSection cities={props.cities} />
  </PageWrapper>
);

AllCitiesOverview.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default AllCitiesOverview;
