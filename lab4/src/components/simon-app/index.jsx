/*
==========================================
    Universidad del Valle de Guatemala
    Sistemas y tecnologias web

    Jose Martinez
    15163

    Laboratorio #4
    index.jsx - SimonApp
==========================================
*/

import React, {Fragment} from 'react';
import Board from '../board';
import './simon-app.css'

class SimonApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            bottomText: "", //Texto que aparece abajo
            buttonColorsEnable: true, //Si los botones se encuentran activos(se encienden cuando se presionan)
            buttonStartEnable: true, //Si el boton de "Start Game" aparece en pantalla
            colorOn: -1, //El color que se encuentra encencido
            colors: ['red', 'blue', 'green', 'yellow'], //Lista de los colores que aparecen en el tablero
            colorsList: [], //Secuencia de colores del juego
            inGame: false, //Determina si el jugador esta jugando o no
            positionColorClick:0, //Posicion que se utiliza cuando el jugador tiene que clickear los botones
            positionColorList: -1 //Posicion que se utiliza cuando se recorre la secuencia de colores
        }
    }

    /* startGame() se llama al presionar el boton de "Start Game" */
    startGame = () =>{
        this.setState({buttonStartEnable: false, inGame: true}); //Inicia el juego y el boton de "Start Game" desaparece
        this.addNewColor(); //Agrega un nuevo color
    }

    /* runColorsList() recorre la lista de secuencia de los colores que se tiene guardado */
    runColorsList = () => {
        this.setState({buttonColorsEnable:false}); //Desactiva los botones para que no se enciendan si se apachan mientras la secuencia de colores se recorre
        
        //Intervalo que se utiliza para encender cada color de la secuencia de colores
        const colorInterval = setInterval(() => { 
            const newPosition = this.state.positionColorList + 1;//Se aumenta la posicion de la secuencia de colores
            if(newPosition > this.state.colorsList.length){ //Si ya se recorrio toda la secuencia de colores
                clearInterval(colorInterval); //Se para el intervalo
                this.setState({colorOn: -1, positionColorList:-1, buttonColorsEnable:true}); //Se activan los botones, todos los botones se apagan, se reinicia la posicion de la secuencia de colores
            } else { //Si aun no se ha terminado de recorrer la secuencia de colores
                this.setState({positionColorList:newPosition, colorOn:this.state.colorsList[this.state.positionColorList]}); //Se actualiza la posicion de la secuencia y se enciende el color actual de la secuencia
                
                //Dependiendo de el color que se enciende suena un sonido diferente
                switch (this.state.colorOn) {
                    case 0:
                        this.firstColor.play();
                        break;
                    case 1:
                        this.secondColor.play();
                        break;
                    case 2:
                        this.thirdColor.play();
                        break;
                    case 3:
                        this.fourthColor.play();
                        break;
                    default:
                        break;
                }

                //Timeout que se utiliza para apagar todos los colores entre el cambio de la posicion de la secuencia de colores
                setTimeout(() => {
                    this.setState({colorOn: -1});
                }, 400);
                
            }
        }, 800)

    }

    /* addNewColor() genera un numero aleatorio entre 0 y 3 para meterlo en la secuencia de colores y despues
        recorre la secuencia */
    addNewColor = () => {
        this.setState({bottomText:`Score: ${this.state.colorsList.length * 100}`}); //Actualiza el score del jugador
        const randomNumber = Math.floor(Math.random() * 100) % 4; //Genera un numero aleatorio entre 0 y 99 y le hace modulo 4 para tener un numero entre 0 y 4
        let newColorsList = this.state.colorsList; //Obtiene la referencia del la secuencia de colores
        newColorsList.push(randomNumber); //Pushea el nuevo numero a la secuencia, como se lo pushea a la referencia se pushea en el estado
        this.runColorsList(); //Recorre la secuencia de colores
    }

    /* colorClick() se llama al hacer click en un boton, se obtiene el parametro atravez de la funcion getColor() que se encuentra en Board.jsx */
    colorClick = (colorClicked) => {
        if(this.state.buttonColorsEnable && this.state.inGame){ //Si los botones se encuentran activos y el juego ya se inicio
            const color = this.state.colors[this.state.colorsList[this.state.positionColorClick]]; //Se obtiene el color actual de la secuencia de colores
            if(color === colorClicked){ //Si el color clickeado es el mismo de el color de la secuencia de colores
                
                //Hace sonar un sonido dependiendo de el color que se presiono
                switch (this.state.colorsList[this.state.positionColorClick]) {
                    case 0:
                        this.firstColor.play();
                        break;
                    case 1:
                        this.secondColor.play();
                        break;
                    case 2:
                        this.thirdColor.play();
                        break;
                    case 3:
                        this.fourthColor.play();
                        break;
                    default:
                        break;
                }

                this.setState({positionColorClick:this.state.positionColorClick+1}); //Se aumenta la posicion de la secuencia de colores
                
                if(this.state.positionColorClick + 1 === this.state.colorsList.length){ //Si ya se pasaron todos los colores de la secuencia de colores
                    this.setState({positionColorClick:0}); //Se reinicia la posicion del color clickeado de la secuencia de colores
                    this.addNewColor(); // Se agrega un nuevo color
                }
            } else { //Si el boton que se clickeo no es el mismo del color actual de la secuencia de colores
                this.setState({positionColorClick:0}); //Se reinicia la posicion(clickeado) de la secuencia de colores

                let newColorList = this.state.colorsList; //Se hace referencia a la secuencia de colores

                //Ciclo que elimina todos los colores que se encuentran en la secuencia de colores
                while (newColorList.length !== 0) {
                    newColorList.pop();
                }

                this.setState({bottomText:"Incorrect! You Lost :("}) //Se cambia el texto de abajo para decirle al jugador que perdió
                
                //Timeout que blanquea el texto de abajo al recorrer dos segundos
                setTimeout(() => {
                    this.setState({bottomText:"",buttonStartEnable:true,inGame: false}) //Blanquea el texto de abajo, reaparece el boton de "Start Game", termina el juego
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

                <div className="bottom-text"> {this.state.bottomText} </div>

                <audio ref={(firstColor) => { this.firstColor = firstColor; }}>
                    <source src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" type="audio/mpeg" >
                    </source>
                </audio>
                <audio ref={(secondColor) => { this.secondColor = secondColor; }}>
                    <source src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"type="audio/mpeg" >
                    </source>
                </audio>
                <audio ref={(thirdColor) => { this.thirdColor = thirdColor; }}>
                    <source src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3" type="audio/mpeg" >
                    </source>
                </audio>
                <audio ref={(fourthColor) => { this.fourthColor = fourthColor; }}>
                    <source src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3" type="audio/mpeg" >
                    </source>
                </audio>
            </Fragment>
        );
    }
}

export default SimonApp;