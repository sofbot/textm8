import { connect } from 'react-redux';
import { getAllTexts, deleteText } from '../../actions/text_actions';
import TextList from './text_list';

const mapStateToProps = state => ({
  texts: state.texts
});

const mapDispatchToProps = dispatch => ({
  getAllTexts: () => dispatch(getAllTexts()),
  deleteText: id => dispatch(deleteText(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextList);
