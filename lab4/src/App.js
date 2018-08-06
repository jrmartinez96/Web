/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #4
    App.js
==========================================
*/
import React, { Component } from 'react';
import './App.css';
import SimonApp from  './components/simon-app';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SimonApp />
      </div>
    );
  }
}

export default App;
