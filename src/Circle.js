import React from 'react';
import './App.css';

class Circle extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div id='circleDiv'
            style={{
                left: this.props.x - 24,
                top: this.props.y - 25,
                display: this.props.display
            }}></div>
        )
    }
}

export default Circle;