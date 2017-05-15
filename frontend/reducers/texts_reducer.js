// the texts slice of state is an object
// with text.id as the key for each text 
import {
  RECEIVE_TEXT,
  REMOVE_TEXT,
  RECEIVE_ALL_TEXTS,
} from '../actions/text_actions';
import { RECEIVE_RESULTS } from '../actions/search_actions';
import { merge, pickBy, each } from 'lodash';

const TextsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_TEXTS:
      each(action.texts, text => (newState[text.id] = text));
      return newState;
    case RECEIVE_TEXT:
      const newText = {[action.text.id]: action.text};
      return merge({}, state, newText);
    case REMOVE_TEXT:
      delete newState[action.id];
      return newState;
    case RECEIVE_RESULTS:
      const freshState = {};
      each(action.texts, text => (freshState[text.id] = text));
      return freshState;
    default:
      return state;
  }
};

export default TextsReducer;
