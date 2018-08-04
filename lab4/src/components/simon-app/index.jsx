import React, {Fragment} from 'react';
import Board from '../board';
import './simon-app.css'

class SimonApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            buttonColorsEnable: true,
            buttonStartEnable: true,
            colorOn: -1,
            colors: ['red', 'blue', 'green', 'yellow'],
            colorsList: [],
            positionColorList: -1,
            positionColorClick:0,
            inGame: false,
            bottomText: "",
            score: 0
        }
    }

    startGame = () =>{
        this.setState({buttonStartEnable: false, inGame: true});
        this.addNewColor();
    }

    runColorsList = () => {
        this.setState({buttonColorsEnable:false});
        const colorInterval = setInterval(() => {
            const newPosition = this.state.positionColorList + 1;
            if(newPosition > this.state.colorsList.length){
                clearInterval(colorInterval);
                this.setState({colorOn: -1, positionColorList:-1, buttonColorsEnable:true});
            } else {
                this.setState({positionColorList:newPosition, colorOn:this.state.colorsList[this.state.positionColorList]});
                setTimeout(() => {
                    this.setState({colorOn: -1});
                    console.log("a")
                }, 400);
                
            }
        }, 800)

    }

    addNewColor = () => {
        this.setState({bottomText:`Score: ${this.state.score}`});
        const randomNumber = Math.floor(Math.random() * 100) % 4;
        console.log(randomNumber);
        let newColorsList = this.state.colorsList;
        newColorsList.push(randomNumber);
        this.setState({colorsList: newColorsList});
        this.runColorsList();
    }

    colorClick = (colorClicked) => {
        if(this.state.buttonColorsEnable && this.state.inGame){
            const color = this.state.colors[this.state.colorsList[this.state.positionColorClick]];
            if(color === colorClicked){

                this.setState({positionColorClick:this.state.positionColorClick+1});
                
                if(this.state.positionColorClick + 1 === this.state.colorsList.length){
                    this.setState({positionColorClick:0, score: this.state.score+1});
                    this.addNewColor();
                }
            } else {
                this.setState({positionColorClick:0});

                let newColorList = this.state.colorsList;
                while (newColorList.length !== 0) {
                    newColorList.pop();
                }

                this.setState({bottomText:"Incorrect. You Lost! :("})
                setTimeout(() => {
                    this.setState({bottomText:"",buttonStartEnable:true})
                }, 2000);
            }
        }
    }

    render(){
        return(
            <Fragment>
                <Board 
                    colorOn={this.state.colorOn >= 0 ? this.state.colors[this.state.colorOn]: 'none'} 
                    colors={this.state.colors}
                    buttonColorsEnable={this.state.buttonColorsEnable}
                    colorClick={this.colorClick}
                />
                <div 
                    className={`button-start ${this.state.buttonStartEnable ? "":"disable"}`} 
                    onClick={this.startGame}>

                    Start Game 
                </div>

                <div> {this.state.bottomText} </div>
            </Fragment>
        );
    }
}



export default SimonApp;