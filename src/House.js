import React, {Component} from 'react';
import TweenMax, {Power0, Bounce, Elastic} from "gsap/TweenMax";
import TimelineMax from 'gsap/TimelineMax';

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

        const buildings = new TimelineMax({delay: 1});
        buildings
            .fromTo('.building5', 1.5, {y: 80}, {ease: Elastic.easeOut, y: 0}, '+=0.2')
            .fromTo('.building6', 1.5, {y: 80}, {ease: Elastic.easeOut, y: 0}, '-=1.2')
            .fromTo('.building1', 1.5, {y: 80}, {ease: Elastic.easeOut, y: 0}, '-=0.3')
            .fromTo('.building2', 1.5, {y: 80}, {ease: Elastic.easeOut, y: 0}, '-=1.2')
            .fromTo('.building4', 1.5, {y: 80}, {ease: Elastic.easeOut, y: 0}, '-=1.4')
            .fromTo('.building3', 1.5, {y: 80}, {ease: Elastic.easeOut, y: 0}, '-=0.7')
            .fromTo('.building5window1', 1.5, {y: -80}, {ease: Elastic.easeOut, y: 0}, '-=0.7')
            .fromTo('.building5window2', 1.5, {y: -80}, {ease: Elastic.easeOut, y: 0}, '-=0.8')
            .set('.bush', {x: '85%', y: '100%'}, '-=2.5')
            .fromTo('.bush', 1, {scale: 0}, {ease: Elastic.easeOut, transformOrigin: 'bottom right', scale: 1}, '-=2.5');
    }

    render() {
        return (
            <HouseSVG className={'house'}/>
        )
    }
}

export default House;
