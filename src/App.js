import React from "react";
import collage from '../public/pokecollage.jpeg';
import Circle from './Circle';

import './App.css'
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            target: ['Poliwhirl', 'Cubone', 'Omanyte'],
            exactCoordinates: {
                Poliwhirl: [277, 406],
                Cubone: [433, 175],
                Omanyte: [268, 220]
            },
            xValue: 0,
            yValue: 0,
            circleDisplay: 'none'
        }

        this.cursorPosition = this.cursorPosition.bind(this);
    }

    cursorPosition = (e) => {
        this.setState({xValue: e.nativeEvent.offsetX});
        this.setState({yValue: e.nativeEvent.offsetY});
        this.setState({circleDisplay: 'block'});
        console.log(`X: ${this.state.xValue}  Y:${this.state.yValue}`);
    }

    render() {

        return (
            <div id='wrapper'>
            <h1 id='title'>Find The Characters!</h1>
            <div id='search'>
                <h3>You need to find:
                    <ul>
                        <li>{this.state.target[0]}</li>
                        <li>{this.state.target[1]}</li>
                        <li>{this.state.target[2]}</li>
                    </ul>
                </h3>
            </div>
            <div id='content'>
                <div id='imageDiv'>
                <img id='collageImage' src={collage} onClick={this.cursorPosition}></img>
                <Circle x={this.state.xValue} y={this.state.yValue} display={this.state.circleDisplay} />
                </div>
            </div>
            </div>
        );
    }
};

export default App;