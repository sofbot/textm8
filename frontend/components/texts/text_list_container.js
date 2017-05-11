import { connect } from 'react-redux';
import TextList from './text_list';
import {
  createText,
  editText,
  getAllTexts
} from '../../actions/text_actions';

const mapStateToProps = state => ({
  texts: state.texts
});

const mapDispatchToProps = dispatch => ({
  createText: text => dispatch(createText(text)),
  editText: text => dispatch(editText(text)),
  getAllTexts: () => dispatch(getAllTexts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextList);
