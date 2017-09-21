import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import style from './CityOverview.scss';

const CityOverview = (props) => {
  const title = `I am the overview page for "${props.city.name}"`;

  return (
    <PageWrapper cityId={props.city.id}>
      <div className={style.main}>
        <h1>{title}</h1>

        <pre>{JSON.stringify(props.city, null, 2)}</pre>
      </div>
    </PageWrapper>
  );
};

CityOverview.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CityOverview;
