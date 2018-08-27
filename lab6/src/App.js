import React, { Component } from 'react';
import { ViewNavBar } from "./components/nav-bar"
import { MainView } from "./components/main-view"
import "./App.css"

class App extends Component {
  render() {
    return (
      <div >
        <ViewNavBar />
        <MainView />
      </div>
    );
  }
}

export default App;
