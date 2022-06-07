import React from "react";
import collage from '../public/pokecollage.jpeg';
import Circle from './Circle';
import Select from "./Select";
/*import { initializeApp } from "firebase/app";
import {addDoc} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD1GXWAm0te-j4NkripXHCVfo5IvuMGcIs",
  authDomain: "where-s-waldo-966e1.firebaseapp.com",
  projectId: "where-s-waldo-966e1",
  storageBucket: "where-s-waldo-966e1.appspot.com",
  messagingSenderId: "939930606033",
  appId: "1:939930606033:web:a3529420df587aff0ba8f0"
};

const app = initializeApp(firebaseConfig);*/

import './App.css'
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            targets: ['Poliwhirl', 'Cubone', 'Omanyte'],
            exactCoordinates: {
                Poliwhirl: [275, 415],
                Cubone: [435, 180],
                Omanyte: [270, 225]
            },
            xValue: 0,
            yValue: 0,
            display: 'none'
        }

        this.cursorPosition = this.cursorPosition.bind(this);
        this.checker = this.checker.bind(this);
        this.plusMinus = this.plusMinus.bind(this);
        this.submitter = this.submitter.bind(this);
    }

    componentDidMount() {
        let totalSeconds = 0;

        let timerFunction = () => {
            totalSeconds++;
            let hour = Math.floor(totalSeconds / 3600);
            let minute = Math.floor((totalSeconds - hour * 3600) / 60);
            let seconds = totalSeconds - (hour * 3600 + minute * 60);
            hour = hour < 10 ? '0' + hour : hour;
            minute = minute < 10 ? '0' + minute : minute;
            seconds = seconds < 10 ? '0' + seconds : seconds;
            document.querySelector('#timer').innerHTML = `${hour}:${minute}:${seconds}`;
        }
        this.interval = setInterval(timerFunction, 1000);
    }

    componentDidUpdate() {
        if (this.state.targets.length == 0) {
            clearInterval(this.interval);
            document.querySelector('#gameOver').style.display = 'block';
        }
    }

    cursorPosition = (e) => {
        this.setState({xValue: e.nativeEvent.offsetX});
        this.setState({yValue: e.nativeEvent.offsetY});
        this.setState({display: 'block'});
    }

    checker = (name) => {
         if (this.plusMinus(this.state.xValue, this.state.yValue, this.state.exactCoordinates[name][0], this.state.exactCoordinates[name][1])) {
             this.setState({
                 targets: this.state.targets.filter(target => target != name)
             })
            document.querySelector('#content').style.backgroundColor='green';
            setTimeout(function(){document.querySelector('#content').style.backgroundColor='white'}, 250);
            return this.setState({display: 'none'})
         }
         this.setState({display: 'none'})
         document.querySelector('#content').style.backgroundColor='red';
         setTimeout(function(){document.querySelector('#content').style.backgroundColor='white'}, 250)
         
    }

    plusMinus = (x, y, checkX, checkY) => {
        if ((x <= (checkX + 50)) && (x >= (checkX - 50))) {
          if ((y <= (checkY + 50)) && (y >= (checkY - 50))) {
            return true
        }
      }
      return false
    }

    submitter = () => {
        console.log(`Name: ${document.querySelector('#name').value} Time: ${document.querySelector('#timer').innerHTML}`)
    }

    render() {

        return (
            <div id='wrapper'>
            <h1 id='title'>Find The Characters!</h1>
            <div id='search'>
                <h3>You need to find:
                    <ul>
                        {this.state.targets.map(target => <li key={target}>{target}</li>)}
                    </ul>
                </h3>
            </div>
            <div id='timerDiv'>
                <p id='timer'>00:00:00</p>
            </div>
            <div id='content'>
                <div id='imageDiv'>
                <img id='collageImage' src={collage} onClick={this.cursorPosition}></img>
                <Circle x={this.state.xValue} y={this.state.yValue} display={this.state.display} />
                <Select targets={this.state.targets} x={this.state.xValue} y={this.state.yValue} display={this.state.display} checker={this.checker} />
                </div>
            </div>
            <div id="gameOver">
                <h1 className="gameOverText">Congratulations!</h1>
                <p className="gameOverText">You've found all the characters. Please fill in your name to submit your time!</p>
                <p className="gameOverText"><input id="name" type='text' placeholder="Enter name here"></input><button onClick={this.submitter}>Submit</button></p>
            </div>
            </div>
        );
    }
};

export default App;