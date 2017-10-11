import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Checkbox/Checkbox';
import getColorVariant from '../../helpers/getColorVariant';
import style from './CompareCities.scss';

const CompareCities = (props) => {
  const checkedBoxColor = getColorVariant(props.category.colorName, '500');

  const cityCheckboxes = props.cities
    // don't show the current city in the checkboxes
    .filter(city => city.id !== props.city.id)
    .map(city => (
      <Checkbox
        key={city.id}
        checked={city.selected}
        checkedBoxColor={checkedBoxColor}
        className={style.checkbox}
        id={city.id}
        label={city.name}
        onChange={() => {
          props.toggleCitySelected(city.id);
        }}
      />
    ));

  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h2 className={style.title}>Compare {props.city.name}</h2>

        <span className={style.subTitle}> across {cityCheckboxes.length} other cities</span>
      </div>

      <div className={style.body}>{cityCheckboxes}</div>
    </div>
  );
};

CompareCities.propTypes = {
  category: PropTypes.shape({
    colorName: PropTypes.string.isRequired,
  }).isRequired,
  city: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
  cities: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool,
  })).isRequired,
  toggleCitySelected: PropTypes.func.isRequired,
};

export default CompareCities;
