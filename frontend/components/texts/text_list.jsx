import React from 'react';
import Text from './text';
import TextFormContainer from './text_form_container';
import { orderBy } from 'lodash';

class TextList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      selected: null
    };
    this.toggleEdit = this.toggleEdit.bind(this);
    this.content = this.content.bind(this);
  }

  // load all texts to state
  componentWillMount() {
    this.props.getAllTexts();
  }

  // editMode on/off; using state.selected to keep track of clicked text
  toggleEdit(text) {
    this.setState({ editMode: !this.state.editMode });
    this.setState({ selected: text });
  }

  // render form if edit mode is on; or list all texts if edit mode is off
  content() {
    if (this.state.editMode) {
      return <TextFormContainer
        text={ this.state.selected }
        toggleEdit={ this.toggleEdit } />;
    } else {
      const texts = orderBy(this.props.texts, ['createdOn'], ['desc']);
      return (
        <div className={ 'container' }>
          <ul className={ 'list' }>
            {
              texts.map((text, idx) => (
                <Text key={ idx }
                  text={ text }
                  toggleEdit={ this.toggleEdit }
                  deleteText={ this.props.deleteText } />
              ))
            }
          </ul>
          <div className={ 'new-txt-btn' }
            onClick={ () => this.toggleEdit(null) }></div>
        </div>
      );
    }
  }

  render() {
    return( this.content() );
  }
}

export default TextList;
