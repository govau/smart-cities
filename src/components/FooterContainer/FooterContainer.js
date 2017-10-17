import { connect } from 'react-redux';
import Footer from './Footer/Footer';

const mapStateToProps = (state, ownProps) => ({
  category: state.categories.find(item => (
    item.id === ownProps.categoryId
  )),
});

export default connect(mapStateToProps)(Footer);
