import React, {Component} from 'react';
import './App.css';
import House from './components/House';
import SPEye from './components/SPeye';
import Clipper from './components/Clipper';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="App-title">Welcome to React</h1>
                <House/>
                <SPEye/>
                <Clipper/>
            </div>)
    }
}

export default App;
