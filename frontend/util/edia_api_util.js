// import fetch for unsupported browsers
import 'whatwg-fetch';

export const getAllTexts = () => (
  fetch('http://localhost:8080/text')
);

export const createText = text => (
  fetch('http://localhost:8080/text', {
    method: 'POST',
    body: JSON.stringify(text),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
);

// text object must include text.id
export const editText = text => (
  fetch('http://localhost:8080/text', {
    method: 'PUT',
    body: JSON.stringify(text),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
);

export const getOneText = id => (
  fetch(`http://localhost:8080/text/${id}`)
  .then(response => response.json())
  .then(text => text)
);

export const deleteText = id => (
  fetch(`http://localhost:8080/text/${id}`, {
    method: 'DELETE'
  })
);

export const searchTexts = text => (
  fetch(`http://localhost:8080/text/search/${text}/`)
);
