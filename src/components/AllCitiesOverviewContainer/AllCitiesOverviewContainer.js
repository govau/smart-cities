import { connect } from 'react-redux';
import AllCitiesOverview from './AllCitiesOverview/AllCitiesOverview';

const mapStateToProps = state => ({
  cities: state.cities,
});

export default connect(mapStateToProps)(AllCitiesOverview);
