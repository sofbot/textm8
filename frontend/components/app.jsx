import React from 'react';
import Header from './header/header';
import SearchContainer from './search/search_container';

const App = state => (
  <div className={ 'wrapper' }>
    <Header />
    <SearchContainer />
  </div>
);

export default App;
