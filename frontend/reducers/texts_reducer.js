import {
  RECEIVE_TEXT,
  REMOVE_TEXT,
  RECEIVE_ALL_TEXTS,
} from '../actions/text_actions';
import { merge, pickBy, each } from 'lodash';

const TextsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch(action.type) {
    case RECEIVE_ALL_TEXTS:
      // return action.texts;
      each(action.texts, text => (newState[text.createdOn] = text));
      return newState;
    case RECEIVE_TEXT:
      // use createdOn as key for easy sorting
      const newText = {[action.text.createdOn]: action.text};
      return merge({}, state, { newText });
    case REMOVE_TEXT:
      const text = pickBy(newState, txt => txt.id === action.id);
      const key = text.createdOn;
      delete newState.key;
      return newState;
    default:
      return state;
  }
};

export default TextsReducer;
