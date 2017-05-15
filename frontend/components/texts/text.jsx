import React from 'react';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showDetail: false, detail: '' };
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  // show/hide text content
  toggleDetail() {
    this.setState({ showDetail: !this.state.showDetail });
  }

  // fill/empty div with text content
  getDetail() {
    if (this.state.showDetail) {
      return (
        <div className={ 'text-detail' }>
          { this.props.text.content }
        </div>
      );
    } else {
      return '';
    }
  }

  render() {
    const { toggleEdit, text, deleteText } = this.props;

    return(
      <li className={ 'text' } >
        <div className={ 'row-container' }>
          <span onClick={ () => deleteText(text.id) } className={ 'close' } />
          <span onClick={ () => toggleEdit(text) } className={ 'edit' } />
          <span onClick={ this.toggleDetail } className={ 'title' }>
            { text.title }
          </span>
        </div>
        { this.getDetail() }
      </li>
    );
  }
}

export default Text;
