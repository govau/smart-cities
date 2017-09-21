import { connect } from 'react-redux';
import CityCategory from './CityCategory/CityCategory';

const mapStateToProps = (state, ownProps) => ({
  category: state.categories.find(item => (
    item.id === ownProps.match.params.categoryId
  )),
  city: state.cities.find(item => (
    item.id === ownProps.match.params.cityId
  )),
});

export default connect(mapStateToProps)(CityCategory);
