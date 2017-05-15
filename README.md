# __text m8__
text m8 is a static web module built on top of this RESTful interface: https://github.com/EdiaEducationTechnology/text-rest-client  

It provides a UI for creating, reading, updating, destroying, and searching text messages.  
```
Built with React and Redux.
```
## __usage__  

__setup:__
* browse to the root of the project
* run `npm install`
* start the server by running `mvn spring-boot:run`
* run `superstatic` and visit `http://localhost:3474` in your browser OR visit your full path to `index.html`

__create text:__  
click the orange '+' icon to show the `TextForm` component. Fill the __required__ title and text fields, then click 'save'  

__read text:__  
click a text title on the `TextList` (the main view) to show a text's content; click again to hide content  

__edit text:__  
click the pencil icon beside a text to show the `TextForm`. Fields should be pre-filled with the selected text details  

__delete text:__  
click the 'x' icon next to the text you'd like to delete forever  

__search texts:__  
typing in the `Search` component executes a fuzzy search on all text titles and content. Results are dynamically displayed  

## __roadmap__  
future versions of text m8 will include:
* Jest tests
* Front-end error handling (for empty fields)
* Client-side storage to store dictionary entries
