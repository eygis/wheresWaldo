import React from 'react';
import './App.css';

class Select extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="gameOver">
                <h1 className="gameOverText">Congratulations!</h1>
                <p className="gameOverText">You've found all the characters. Please fill in your name to submit your time!</p>
                <p className="gameOverText"><input id="name" type='text' placeholder="Enter name here"></input><button onClick={this.props.submitter}>Submit</button></p>
            </div>
        )
    }
}

export default Select;