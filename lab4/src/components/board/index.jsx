/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #4
    index.jsx - Board
==========================================
*/

import React from 'react';
import ColorButton from  '../color-button';
import './board.css';

class Board extends React.Component {

    /*  getColor() se llama al seleccionar un boton, y esta funcion llama a una funcion que se encuentra en SimonApp para 
        pasar el color que se presiono */
    getColor = (color) => {
        this.props.colorClick(color);
    }

    render() {
        const {colorOn, buttonColorsEnable, colors} = this.props;
        return(
            <div className="board">
                <div className="row">
                    <ColorButton color={colors[0]} isTurnedOn={colors[0]===colorOn} position="top-left" getColor={this.getColor} enable={buttonColorsEnable}/>
                    <ColorButton color={colors[1]} isTurnedOn={colors[1]===colorOn} position="top-right" getColor={this.getColor} enable={buttonColorsEnable}/>
                </div>
                <div className="row">
                    <ColorButton color={colors[2]} isTurnedOn={colors[2]===colorOn} position="bottom-left" getColor={this.getColor} enable={buttonColorsEnable}/>
                    <ColorButton color={colors[3]} isTurnedOn={colors[3]===colorOn} position="bottom-right" getColor={this.getColor} enable={buttonColorsEnable}/>
                </div>
            </div>
        );
    }

}

export default Board;