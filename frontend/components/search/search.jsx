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

  handleChange(e) {
    this.setState({ query: e.target.value}, this.checkQuery);
  }

  checkQuery() {
    const { searchTexts, getAllTexts } = this.props;
    const { query } = this.state;
    if (query === '') {
      return getAllTexts();
    } else {
      return searchTexts(this.parseQuery(query));
    }
  }

  parseQuery(query) {
    return query.trim().split(" ").join("+");
  }

  clearField() {
    this.setState({ query: ''});
  }

  render() {
    return(
      <div>
        <input value={ this.state.query }
          onChange={ this.handleChange }
          onClick={ this.clearField }/>
        <TextListContainer />
      </div>
    );
  }
}

export default Search;
