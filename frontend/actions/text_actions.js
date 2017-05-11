import * as APIUtil from '../util/edia_api_util';
export const RECEIVE_TEXT = 'RECEIVE_TEXT';
export const REMOVE_TEXT = 'REMOVE_TEXT';
export const RECEIVE_ALL_TEXTS = 'RECEIVE_ALL_TEXTS';

export const receiveText = text => ({
  type: RECEIVE_TEXT,
  text
});

export const removeText = id => ({
  type: REMOVE_TEXT,
  id
});

export const receiveAllTexts = texts => ({
  type: RECEIVE_ALL_TEXTS,
  texts
});

export const getAllTexts = () => dispatch => (
  APIUtil.getAllTexts()
  .then(response => response.json())
  .then(texts => dispatch(receiveAllTexts(texts)))
  .catch(err => console.log(err))
);

export const createText = text => dispatch => (
  APIUtil.createText(text)
  .then(() => dispatch(receiveText(text)))
  .catch(err => console.log(err))
);

export const deleteText = id => dispatch => (
  APIUtil.deleteText(id)
  .then(() => dispatch(removeText(id)))
  .catch(err => console.log(err))
);

export const exitText = text => dispatch => (
  APIUtil.editText(text)
  .then(() => dispatch(receiveText(text)))
  .catch(err => console.log(err))
);
