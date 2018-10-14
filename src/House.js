import React, {Component} from 'react';
import TweenMax, {Power0, Bounce, Elastic} from "gsap/TweenMax";

import './App.css';
import HouseSVG from './svg/house_and_clouds.svg';

class House extends Component {
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
        return (
            <HouseSVG className={'house'}/>
        )
    }
}

export default House;