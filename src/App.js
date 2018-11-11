import React, {Component} from 'react';
import './App.css';
import House from './House';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="App-title">Welcome to React</h1>
                <House/>
            </div>)
    }
}

export default App;
