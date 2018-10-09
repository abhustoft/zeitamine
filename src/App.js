import React, {Component} from 'react';
import TweenMax from "gsap/TweenMax";

import './App.css';
import HouseTree from './svg/house_and_tree.svg';
import HouseClouds from './svg/house_and_clouds.svg';


class App extends Component {

    componentDidMount() {
        TweenMax.to('.plen1', 3, {x:100});
        TweenMax.to('.plen2', 3, {x:100});
        TweenMax.to('.building5', 3, {x:100});
        TweenMax.to('.building6', 5, {y:-50, x: 50});
        TweenMax.to('.building6window2', 5, {y:-50, x: 50, fill: 'red'});
        TweenMax.to('.building6window1', 5, {y:-50, x: 50, fill: 'black'});
        TweenMax.to('.building6window4', 5, {y:-50, x: 50, fill: 'green'});
        TweenMax.to('.building6window3', 5, {y:-50, x: 50, fill: 'red'});
        TweenMax.to('.building6window5', 5, {y:-50, x: 50, fill: 'red'});
        TweenMax.to('.building6window6', 5, {y:-50, x: 50, fill: 'red'});
        TweenMax.to('.bush', 8, {fill: 'red'});
        TweenMax.to('.tree1crown', 8, {fill: 'red'});
        TweenMax.to('.tree2crown', 8, {fill: 'black'});
        TweenMax.to('.window', 8, {fill: 'yellow'});
        TweenMax.to('.building2window1', 8, {fill: 'blue'});
        TweenMax.to('.building3window3', 8, {fill: 'blue'});
        TweenMax.to('.cloud2', 8, {x: 100});
        TweenMax.to('.check', 4, {y: 200});
        TweenMax.to('.cloud1', 8, {x: 350});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <HouseTree/>
                    <HouseClouds/>
                </header>
            </div>
        );
    }
}

export default App;
