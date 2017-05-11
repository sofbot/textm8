import { combineReducers } from 'redux';
import TextsReducer from './texts_reducer';

const rootReducer = combineReducers({
  texts: TextsReducer
});

export default rootReducer;
