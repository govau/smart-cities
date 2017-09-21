import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import style from './CityCategory.scss';

const CityCategory = (props) => {
  const title = `I am the "${props.category.name}" page for "${props.city.name}"`;

  return (
    <PageWrapper
      cityId={props.city.id}
      categoryId={props.category.id}
    >
      <div className={style.main}>
        <h1>{title}</h1>

        <pre>{JSON.stringify(props.category, null, 2)}</pre>
        <pre>{JSON.stringify(props.city, null, 2)}</pre>
      </div>
    </PageWrapper>
  );
};

CityCategory.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
};

export default CityCategory;
