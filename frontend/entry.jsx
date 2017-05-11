import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import * as APIUtil from './util/edia_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.getAllTexts = APIUtil.getAllTexts;
  window.createText = APIUtil.createText;
  window.editText = APIUtil.editText;
  window.getOneText = APIUtil.getOneText;
  window.deleteText = APIUtil.deleteText;
  window.searchTexts = APIUtil.searchTexts;

  // fill preloadedState w localStorage

  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store } />, root);
});
