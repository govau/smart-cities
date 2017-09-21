import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../../PageWrapper/PageWrapper';
import style from './AllCitiesCategory.scss';

const AllCitiesCategory = (props) => {
  const title = `I am the "${props.category.name}" page for all cities`;

  return (
    <PageWrapper categoryId={props.category.id}>
      <div className={style.main}>
        <h1>{title}</h1>

        <pre>{JSON.stringify(props.category, null, 2)}</pre>
      </div>
    </PageWrapper>
  );
};

AllCitiesCategory.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default AllCitiesCategory;
