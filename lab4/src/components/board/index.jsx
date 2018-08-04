import React from 'react';
import ColorButton from  '../color-button';
import './board.css';

class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            colors: this.props.colors
        }
    }

    getColor = (color) => {
        this.props.colorClick(color);
    }

    render() {
        const {colorOn, buttonColorsEnable} = this.props;
        return(
            <div className="board">
                <div className="row">
                    <ColorButton color={this.state.colors[0]} isTurnedOn={this.state.colors[0]===colorOn} position="top-left" getColor={this.getColor} enable={buttonColorsEnable}/>
                    <ColorButton color={this.state.colors[1]} isTurnedOn={this.state.colors[1]===colorOn} position="top-right" getColor={this.getColor} enable={buttonColorsEnable}/>
                </div>
                <div className="row">
                    <ColorButton color={this.state.colors[2]} isTurnedOn={this.state.colors[2]===colorOn} position="bottom-left" getColor={this.getColor} enable={buttonColorsEnable}/>
                    <ColorButton color={this.state.colors[3]} isTurnedOn={this.state.colors[3]===colorOn} position="bottom-right" getColor={this.getColor} enable={buttonColorsEnable}/>
                </div>
            </div>
        );
    }

}

export default Board;