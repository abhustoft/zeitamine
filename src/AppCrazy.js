import React, {Component} from 'react';
import TweenMax, {Bounce, Power0} from "gsap/TweenMax";

import './App.css';
import HouseClouds from './svg/house_and_clouds.svg';


class App extends Component {

    componentDidMount() {
        TweenMax.to('.plen1', 3, {x:100});
        TweenMax.to('.plen2', 3, {x:100});
        TweenMax.to('.building5', 3, {delay: 4, x:-50, y: -70});
        TweenMax.to('.building6', 5, {delay: 3, x:50, y: -50});
        TweenMax.to('.building6window2', 5, {y:-50, x: 50, fill: 'red'});
        TweenMax.to('.building6window1', 15, {y:-50, x: 50, fill: 'black'});
        TweenMax.to('.building6window4', 15, {y:-50, x: 50, fill: 'green'});
        TweenMax.to('.building6window3', 5, {y:-50, x: 50, fill: 'red'});
        TweenMax.to('.building6window5', 15, {y:-50, x: 50, fill: 'red'});
        TweenMax.to('.building6window6', 15, {y:-50, x: 50, fill: 'red'});
        TweenMax.to('.bush', 8, {fill: 'red'});
        TweenMax.to('.tree1crown', 8, {fill: 'red'});
        TweenMax.to('.tree2crown', 8, {fill: 'black'});
        TweenMax.to('.check', 4, {delay: 4, x: 30,y: -100});
        TweenMax.fromTo('.window', 0.5, {fill: 'yellow'},{fill: 'white',repeat: -1, repeatDelay: 5});
        TweenMax.to('.building2window1', 0.5, {fill: 'yellow'});
        TweenMax.to('.building3window3', 0.5, {fill: 'yellow'});

        TweenMax.fromTo('.cloud1', 38, {x: -100}, {x: 350, delay: 1, repeat: -1, repeatDelay: 2, ease: Power0.easeNone});
        TweenMax.fromTo('.cloud2', 55, {x: -50}, {x: 350, delay: 20, repeat: -1, repeatDelay: 4,ease: Power0.easeNone});
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    {/*<HouseTree/>*/}
                    <HouseClouds/>
                </header>
            </div>
        );
    }
}

export default App;
