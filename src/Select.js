import React from 'react';
import './App.css';

class Select extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div id='select'
            style={{
                left: this.props.x + 20,
                top: this.props.y - 65,
                display: this.props.display
            }}>
                <ul>
                {this.props.targets.map(target => <li className='listTarget' key={target} onClick={()=>this.props.checker(target)}>{target}</li>)}
                </ul>
            </div>
        )
    }
}

export default Select;