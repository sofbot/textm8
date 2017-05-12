import React from 'react';
import { filter } from 'lodash';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    const { text } = this.props;
    this.state = {
      title: text ? text.title : '',
      content: text ? text.content : '',
      id: text ? text.id : '',
      createdOn: text ? text.createdOn : '',
      score: text ? text.score : 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { createText, editText, text, toggleEdit } = this.props;
    e.preventDefault();

    if (text) {
      editText(this.state);
    } else {
      createText(
        filter(this.state, attr => !attr.id && !attr.createdOn)
      );
    }
    toggleEdit();
  }

  update(field) {
    return e => (
      this.setState({ [field] : e.target.value })
    );
  }

  render() {
    const header = (this.props.text ? 'Edit Text' : 'New Text');

    return(
      <div>
        <h1>{ header }</h1>
        <form onSubmit={ this.handleSubmit }>
          <label>
            title
            <input
              onChange={ this.update('title') }
              value={ this.state.title } />
          </label>
          <label>
            text
            <textarea
              onChange={ this.update('content') }
              value={ this.state.content }/>
          </label>
          <input type="submit" value="save" />
        </form>
      </div>
    );
  }
}

export default TextForm;
