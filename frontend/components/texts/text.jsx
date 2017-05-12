import React from 'react';

const Text = ({ toggleEdit, text }) => (
  <div onClick={ () => toggleEdit(text) }>
    { text.title }
  </div>
);


export default Text;
