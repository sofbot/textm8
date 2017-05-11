import React from 'react';
import Text from './text';
import { orderBy } from 'lodash';

class TextList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllTexts();
  }

  render() {
    const texts = orderBy(this.props.texts, ['createdOn'], ['desc']);

    return(
      <div>
        <ul>
          {
            texts.map((text, idx) => (
              <Text key={ idx } title={ text.title } />
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TextList;
