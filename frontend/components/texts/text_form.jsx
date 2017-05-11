import React from 'react';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    const { text } = this.props;

    this.state = {
      title: text ? text.title : '',
      content: text ? text.content : '',
      id: text ? text.id : '',
      createdOn: text ? text.createdOn : '',
      score: text ? text.score : ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const {createText, editText, text, toggleEdit} = this.props;
    e.preventDefault();

    if (text) {
      editText(this.state);
    } else {
      const newText = this.state;
      delete newText.id;
      delete newText.createdOn;
      delete newText.score;
      createText(newText);
    }
    toggleEdit();
  }

  update(field) {
    return e => (
      this.setState({ [field] : e.target.value })
    );
  }

  render() {
    const header = (this.action === 'edit' ? 'Edit Text' : 'New Text');

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
