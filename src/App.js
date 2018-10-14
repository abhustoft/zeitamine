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
    }

    render() {

        const toggle = (e) => {
            const classes = e.currentTarget.classList;
            const content = document.getElementsByClassName('content');

            if(!classes.contains('closed')) {
                TweenMax.to(content, 0.5, {height:0});
                classes.toggle("closed");
            } else {
                TweenMax.set(content, { ease: Elastic.easeOut, height:"auto"});
                TweenMax.from(content, 2, { ease: Elastic.easeOut, height:0});
                classes.toggle("closed");
            }
        };

        return (
            <div className="App">
                <header className="App-header">
                    <HouseClouds className={'house'}/>
                    <div className={'expander'}>
                        <button className={'button closed'} onClick={toggle}>
                            Button
                        </button>
                        <div className={'content'}>
                            <div>Got some text</div>
                            <div>Got some text</div>
                            <div>Got some text</div>
                            <div>Got some text</div>
                        </div>
                    </div>
                </header>
            </div>)
    }
};

export default App;
