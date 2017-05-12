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

  componentWillMount() {
    this.props.getAllTexts();
  }

  toggleEdit(text) {
    this.setState({ editMode: !this.state.editMode });
    this.setState({ selected: text });
  }

  content() {
    if (this.state.editMode) {
      return <TextFormContainer
        text={ this.state.selected }
        toggleEdit={ this.toggleEdit } />;
    } else {
      const texts = orderBy(this.props.texts, ['createdOn'], ['desc']);
      return (
        <div>
          <ul>
            {
              texts.map((text, idx) => (
                <Text key={ idx }
                  text={ text }
                  toggleEdit={ this.toggleEdit } />
              ))
            }
          </ul>
          <div onClick={ () => this.toggleEdit(null) }> new text </div>
        </div>
      );
    }
  }

  render() {
    return( this.content() );
  }
}

export default TextList;
