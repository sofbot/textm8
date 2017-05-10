import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './util/edia_api_util';

document.addEventListener('DOMContentLoaded', () => {
  window.getAllTexts = APIUtil.getAllTexts;
  window.createText = APIUtil.createText;
  window.updateText = APIUtil.updateText;
  window.getOneText = APIUtil.getOneText;
  window.deleteText = APIUtil.deleteText;
  window.searchTexts = APIUtil.searchTexts;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>yas knowble</h1>, root);
});
