import { connect } from 'react-redux';
import CityOverview from './CityOverview/CityOverview';

const mapStateToProps = (state, ownProps) => ({
  city: state.cities.find(item => (
    item.id === ownProps.match.params.cityId
  )),
});

export default connect(mapStateToProps)(CityOverview);
