import React from 'react';
import "./status-bar.css";


class StatusBar extends React.Component{

    render() {
        const {title, localCity, localTemperature} = this.props;
        return(
            <div className="status-bar">
                <div className="status">
                    <div className="local-weather">
                        Local: {localCity}, {localTemperature}°
                    </div>
                    <div className="title">
                        <div className="weather-logo">
                            <img className="logo" alt="icono del app" src="http://www.pngmart.com/files/3/Sun-PNG-Transparent-Image.png" />
                        </div>
                        <div className="weather-title">
                            {title}
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}


export default StatusBar;