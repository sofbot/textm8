import { connect } from 'react-redux';
import { searchTexts } from '../../actions/search_actions';
import { getAllTexts } from '../../actions/text_actions';
import Search from './search';

const mapDispatchToProps = dispatch => ({
  searchTexts: query => dispatch(searchTexts(query)),
  getAllTexts: () => dispatch(getAllTexts())
});

export default connect(
  null,
  mapDispatchToProps
)(Search);
