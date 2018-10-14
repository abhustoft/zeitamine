import React, {Component} from 'react';
import TweenMax, {Power0, Bounce, Elastic} from "gsap/TweenMax";

import './App.css';
import HouseClouds from './svg/house_and_clouds.svg';


class App extends Component {

    componentDidMount() {
        TweenMax.fromTo('.cloud1', 38, {x: -100}, {
            x: 350,
            delay: 1,
            repeat: -1,
            repeatDelay: 2,
            ease: Power0.easeNone
        });
        TweenMax.fromTo('.cloud2', 55, {x: -50}, {
            x: 350,
            delay: 20,
            repeat: -1,
            repeatDelay: 4,
            ease: Power0.easeNone
        });
        TweenMax.from('.dropdown', 2, {ease: Elastic.easeOut, delay: 7, css: {height: 0}});
        TweenMax.to('.dropdown', 0.4, {ease: Elastic.noEase, delay: 12, css: {height: 0}});

        // TweenMax.fromTo('.dropdown', 2, {css:{height:0}}, {ease:Elastic.easeOut,delay: 3, css:{height:100}});
        // TweenMax.fromTo('.dropdown', 2, {css:{height:100}}, {ease:Elastic.easeOut,delay: 5, css:{height:0}});


    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <HouseClouds className={'house'}/>
                    <div className={'dropdown'}>
                        <div>Drop down text</div>
                        <div>Drop down text</div>
                        <div>Drop down text</div>
                    </div>
                    <div className={'gotsometext'}>
                        <div>Got some text</div>
                        <div>Got some text</div>
                        <div>Got some text</div>
                        <div>Got some text</div>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
