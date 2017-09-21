import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import style from './AllCitiesOverview.scss';

const AllCitiesOverview = (props) => {
  const title = 'I am the overview page for all cities';

  return (
    <PageWrapper>
      <div className={style.main}>
        <h1>{title}</h1>

        <pre>{JSON.stringify(props.cities, null, 2)}</pre>
      </div>
    </PageWrapper>
  );
};

AllCitiesOverview.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default AllCitiesOverview;
