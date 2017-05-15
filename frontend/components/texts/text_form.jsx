import React from 'react';
import { filter, trim } from 'lodash';

class TextForm extends React.Component {
  constructor(props) {
    super(props);
    const { text } = this.props;

    // edit text requests will be passed a text to edit;
    // create text requests will have this.props.text === null
    this.state = {
      title: text ? text.title : '',
      content: text ? text.content : '',
      id: text ? text.id : '',
      createdOn: text ? text.createdOn : '',
      score: text ? text.score : 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    const { createText, editText, text, toggleEdit } = this.props;
    e.preventDefault();

    // do not submit form if title or content are blank
    if (this.isValid()) {
      if (text) {
        editText(this.state);
      } else {
        // remove id and createdOn so they can be auto generated
        delete this.state.id;
        delete this.state.createdOn;
        createText(this.state);
      }
    } else {
      // TODO: better error handling; should display error msg
      console.log('missing required fields');
    }

    toggleEdit();
  }

  // checks that required title and content fields are not empty
  isValid() {
    return (
      trim(this.state.title).length > 1
      && trim(this.state.content).length > 1
    );
  }

  // controlled inputs
  update(field) {
    return e => (
      this.setState({ [field] : e.target.value })
    );
  }

  render() {
    const mode = this.props.text ? 'edit' : 'new';

    return(
      <form>
        <label>
          <span className={ 'mode' }>{ mode }</span>
          <span>title</span>
        </label>
          <input
            onChange={ this.update('title') }
            value={ this.state.title } />
          <label>
            <span className={ 'mode' }>{ mode }</span>
            <span>text</span>
          </label>
          <textarea
            onChange={ this.update('content') }
            value={ this.state.content }/>
          <div className={ 'row-container' }>
            <span onClick={ this.handleSubmit }
              className={ 'save' }> save </span>
            <span onClick={ this.props.toggleEdit }
              className={ 'back' }> back </span>
          </div>
      </form>
    );
  }
}

export default TextForm;
