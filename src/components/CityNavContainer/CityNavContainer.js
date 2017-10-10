import { connect } from 'react-redux';
import CityNav from './CityNav/CityNav';

const mapStateToProps = (state, ownProps) => ({
  categoryId: ownProps.categoryId,
  cityId: ownProps.cityId,
  cities: state.cities,
});

export default connect(mapStateToProps)(CityNav);
