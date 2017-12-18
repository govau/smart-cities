import { connect } from 'react-redux';
import AllCitiesCategory from './AllCitiesCategory/AllCitiesCategory';
import { setShowChartPatterns } from '../../redux/ducks/ui';

const mapStateToProps = (state, ownProps) => ({
  category: state.categories.find(item => (
    item.id === ownProps.match.params.categoryId
  )),
  cities: state.cities,
  showChartPatterns: state.ui.showChartPatterns,
});

export default connect(
  mapStateToProps,
  {
    setShowChartPatterns,
  },
)(AllCitiesCategory);
