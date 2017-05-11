import React from 'react';
import Text from './text';

class TextList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllTexts();
  }

  render() {
    const texts = this.props.texts || [];

    return(
      <div>
        <ul>
          {
            Object.keys(texts).map((key, idx) => (
              <Text key={ idx } text={ texts[key] } />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TextList;
