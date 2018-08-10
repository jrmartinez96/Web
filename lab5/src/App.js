import React, { Component } from 'react';
import WeatherApp from "./components/WeatherApp"

class App extends Component {
  // key: 6facbdf7b31a7be27877e2b22d417e0c
  // fetch("http://api.openweathermap.org/data/2.5/weather?q=mexico city&APPID=6facbdf7b31a7be27877e2b22d417e0c").then((resp)=>resp.json()).then((data)=>console.log(data));


  render() {
    return (
      <div className="App">
          <WeatherApp />
      </div>
    );
  }
}

export default App;

