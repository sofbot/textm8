import * as searchAPI from '../util/edia_api_util';
export const RECEIVE_RESULTS = 'RECEIVE_RESULTS';

export const receiveSearchResults = texts => ({
  type: RECEIVE_RESULTS,
  texts
});

export const searchTexts = query => dispatch => {
  searchAPI.searchTexts(query)
    .then(response => response.json())
    .then(texts => dispatch(receiveSearchResults(texts)));
};
