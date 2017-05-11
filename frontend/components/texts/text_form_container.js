import { connect } from 'react-redux';
import TextForm from './text_form';
import {
  createText,
  editText
} from '../../actions/text_actions';

const mapDispatchToProps = dispatch => ({
  createText: text => dispatch(createText(text)),
  editText: text => dispatch(editText(text))
});

export default connect(
  null,
  mapDispatchToProps
)(TextForm);
