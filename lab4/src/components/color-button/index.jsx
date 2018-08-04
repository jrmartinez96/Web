import React from 'react';
import './color-button.css';

class ColorButton extends React.Component{

    passColor = () => {
        this.props.getColor(this.props.color);
    }

    render(){
        const {color, isTurnedOn, position, enable} = this.props;
        return(
            <div 
                className = {`color-button ${isTurnedOn ? 'on': ''} ${position} ${enable ? "enable":""}`} 
                style={{background: color}} 
                onClick={this.passColor}
            />
        )
    }
}

export default ColorButton;