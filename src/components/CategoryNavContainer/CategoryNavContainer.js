import { connect } from 'react-redux';
import CategoryNav from './CategoryNav/CategoryNav';

const mapStateToProps = (state, ownProps) => ({
  categories: state.categories,
  cityId: ownProps.cityId,
  cityName: ownProps.cityName,
});

export default connect(mapStateToProps)(CategoryNav);
