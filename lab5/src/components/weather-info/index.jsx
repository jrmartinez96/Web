import React from 'react';
import "./weather-info.css";

class WeatherInfo extends React.Component{

    render(){
        const {cityName, mainWeather, icon, currentTemperature, maxTemperature, minTemperature} = this.props;
        return(
            <div className="info-box">
                <div className="city-name"> {cityName} </div>
                <div className="current-icon">
                    <img style={{width:'5rem'}} alt="icono del cielo" src={`http://openweathermap.org/img/w/${icon}.png`} />
                </div>
                <div className="current-temperature">
                    Current: {currentTemperature}°C, {mainWeather}
                </div>
                <div className="temperature-limits">
                    Min: {minTemperature}°C / Max: {maxTemperature}°C
                </div>

            </div>
        );
    }
}

export default WeatherInfo;