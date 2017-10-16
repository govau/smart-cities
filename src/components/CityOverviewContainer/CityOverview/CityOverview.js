import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import OverviewSection from '../../OverviewSection/OverviewSection';

const CityOverview = props => (
  <PageWrapper cityId={props.city.id}>
    <OverviewSection city={props.city} />
  </PageWrapper>
);

CityOverview.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CityOverview;
