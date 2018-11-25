import React, {Component} from 'react';
import './App.css';
import House from './components/House';
import SPEye from './components/SPEye/SPeye';

class App extends Component {
    render() {
        return (
            <div className="App">
                <House/>
                <div className='blueBox'>
                    <SPEye/>
                </div>
            </div>)
    }
}

export default App;
