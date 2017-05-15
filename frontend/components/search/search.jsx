import React from 'react';
import TextListContainer from '../texts/text_list_container';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'search'
    };
    this.handleChange = this.handleChange.bind(this);
    this.clearField = this.clearField.bind(this);
    this.checkQuery = this.checkQuery.bind(this);
  }

  // controlled inputs, also calling checkQuery every time an input is changed
  handleChange(e) {
    this.setState({ query: e.target.value}, this.checkQuery);
  }

  // returns parsed query search results, or all texts if search field is empty
  checkQuery() {
    const { searchTexts, getAllTexts } = this.props;
    const { query } = this.state;
    if (query === '') {
      return getAllTexts();
    } else {
      return searchTexts(this.parseQuery(query));
    }
  }

  // returns query in correct format for the search url
  parseQuery(query) {
    return query.trim().split(" ").join("+");
  }

  clearField() {
    this.setState({ query: ''});
  }

  render() {
    return(
      <div className={ 'container' }>
        <div className={ 'search-container' }>
          <input value={ this.state.query }
            onChange={ this.handleChange }
            onClick={ this.clearField }/>
        </div>
        <TextListContainer />
      </div>
    );
  }
}

export default Search;
