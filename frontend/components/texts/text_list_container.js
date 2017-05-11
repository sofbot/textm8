import { connect } from 'react-redux';
import TextList from './text_list';
import {
  getAllTexts
} from '../../actions/text_actions';

const mapStateToProps = state => ({
  texts: state.texts
});

const mapDispatchToProps = dispatch => ({
  getAllTexts: () => dispatch(getAllTexts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextList);
