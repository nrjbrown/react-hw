import React, { Component } from 'react';
import './App.css';
// importing Component, should be with the same name as Component created.
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Hi I'm a react app!</h1>
      <p>Working </p>
      < Person name="Chris" age="28"/>
      < Person name="Alix" age="27">This is an example of children</ Person>
      </div>
    );

  }
}

export default App;
