/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #4
    index.jsx - ColorButton
==========================================
*/

import React from 'react';
import './color-button.css';

class ColorButton extends React.Component{

    /* passColor() pasa el color que se presiono a Board para que este se pase a SimonApp */
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