import React from 'react';
import './App.css';

class Select extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            times: null
        }
    }

    componentDidMount() {
        this.props.loader()
            .then(res => {
                this.setState({times: res.docs})
            })
    }
    render() {

        

        return(
            <div className="gameOver">
                <h1 className='scoresText'>Top Scores</h1>
                {!this.state.times ? 'Loading...' : this.state.times.map(res => <p className='scoresText' key={res['_document'].data.value.mapValue.fields.name.stringValue}>Name: {res['_document'].data.value.mapValue.fields.name.stringValue} Time: {res['_document'].data.value.mapValue.fields.time.stringValue}</p>)}
            </div>
        )
    }
}

export default Select;