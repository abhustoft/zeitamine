import React, {Component} from 'react';
import './App.css';
import House from './components/House';
import Clipper from './components/Clipper';
import SPEye from './components/SPeye';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="App-title">Welcome to React</h1>
                <House/>
                {/*<Clipper/>*/}
                <SPEye />
            </div>)
    }
}

export default App;
