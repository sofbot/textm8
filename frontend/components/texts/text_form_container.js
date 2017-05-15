import { connect } from 'react-redux';
import { createText, editText } from '../../actions/text_actions';
import TextForm from './text_form';

const mapDispatchToProps = dispatch => ({
  createText: text => dispatch(createText(text)),
  editText: text => dispatch(editText(text)),
});

export default connect(
  null,
  mapDispatchToProps
)(TextForm);
