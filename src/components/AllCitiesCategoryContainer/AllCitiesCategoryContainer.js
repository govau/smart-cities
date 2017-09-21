import { connect } from 'react-redux';
import AllCitiesCategory from './AllCitiesCategory/AllCitiesCategory';

const mapStateToProps = (state, ownProps) => ({
  category: state.categories.find(item => (
    item.id === ownProps.match.params.categoryId
  )),
  cities: state.cities,
});

export default connect(mapStateToProps)(AllCitiesCategory);
