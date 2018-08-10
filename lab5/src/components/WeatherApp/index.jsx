import React, {Fragment} from 'react';
import StatusBar from "../status-bar";
import WeatherInfo from "../weather-info";

import "./weather-app.css"


class WeatherApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            weathers: [],
            cityNotFound: false,
            searchInput: '',
        }
    }

    searchCityWeather = () => {
        if(this.state.searchInput !== ''){
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.searchInput}&APPID=6facbdf7b31a7be27877e2b22d417e0c`).then((resp)=>resp.json()).then((data)=>{
                if(data["cod"] !== "404"){
                    let currentWeathers = this.state.weathers;
                    currentWeathers.push(data);
                    this.setState({weathers:currentWeathers, searchInput:''});
                } else {
                    this.setState({cityNotFound:true});
                    setTimeout(() => {
                        this.setState({cityNotFound:false});
                    }, 2500);
                }

                console.log(data);
            });
        }
    }

    render(){
        let weatherBoxes = [];
        for (let i = this.state.weathers.length-1; i > -1; i= i -1) {
            const currentWeather = this.state.weathers[i];
            const cityName = currentWeather["name"] + ", " + currentWeather["sys"]["country"];
            const mainWeather = currentWeather["weather"][0]["main"];
            const icon = currentWeather["weather"][0]["icon"];
            const currentTemperature = Math.round(currentWeather["main"]["temp"] - 273.15);
            const maxTemperature = Math.round(currentWeather["main"]["temp_max"] - 273.15);
            const minTemperature = Math.round(currentWeather["main"]["temp_min"] - 273.15);
            weatherBoxes.push(<WeatherInfo key={i} cityName={cityName} mainWeather={mainWeather} icon={icon} currentTemperature={currentTemperature} maxTemperature={maxTemperature} minTemperature={minTemperature}/>)
        }

        return(
            <Fragment>
                <StatusBar title="Weather App" localCity="Guatemala City" localTemperature={22}/>
                <div className="search-box"> 
                    <input
                        type="text"
                        placeholder="City"
                        className="search-input"
                        value={this.state.searchInput}
                        onChange={(e) => this.setState({searchInput: e.target.value})}
                    />

                    <div className="search-button" onClick={this.searchCityWeather}> Search </div>
                </div>

                {weatherBoxes}

                <div className={`city-not-found ${this.state.cityNotFound ? "able":""}`}> City not found </div>
            </Fragment>
        );
    }
}

export default WeatherApp;