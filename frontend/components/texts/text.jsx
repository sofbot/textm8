import React from 'react';

class Text extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { toggleEdit, text } = this.props;
    return(
      <div onClick={ () => toggleEdit(text) }>
        { this.props.text.title }
      </div>
    );
  }
}

export default Text;
