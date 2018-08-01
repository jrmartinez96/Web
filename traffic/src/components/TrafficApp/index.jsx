import React from 'react';

import TrafficLight from '../TrafficLight';


class TrafficApp extends React.Component {

  state = {colorOn: 0, colors: ['red', 'yellow', 'green']}

  handleClick = () => {
    setInterval(()=>{
      const nColors = this.state.colors.length;
      let newColor = this.state.colorOn + 1;
      if(newColor > nColors-1){
        newColor = 0;
      }

      this.setState({colorOn:newColor});
    },1000)
  }

  componentDidMount(){
    this.handleClick();
  }

  render() {
    return <TrafficLight colors={this.state.colors} turnedOnLight={this.state.colors[this.state.colorOn]} onClick={this.handleClick.bind(this)}/>;
  }
}


export default TrafficApp;
