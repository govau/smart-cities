import { connect } from 'react-redux';
import CityNav from './CityNav/CityNav';

const mapStateToProps = (state, ownProps) => ({
  cityId: ownProps.cityId,
  cities: state.cities,
});

export default connect(mapStateToProps)(CityNav);
