import React, {Component} from 'react';
import TweenMax, {Power0, Bounce, Elastic} from "gsap/TweenMax";
import TimelineMax from 'gsap/TimelineMax';

import './App.css';
import HouseSVG from './svg/house_and_clouds.svg';

class House extends Component {
    componentDidMount() {

        TweenMax.fromTo('.cloud1', 38, {x: -100}, {
            x: 350,
            delay: 5,
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
            .fromTo('.building5',        1.5, {y: 80}, {ease: Elastic.easeOut, y: 0})
            .fromTo('.building5window1', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=0.7')
            .fromTo('.building5window2', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.5')
            .fromTo('.building5window3', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.4')
            .fromTo('.building5window4', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.3')
            .fromTo('.building6',        1.5, {y: 80}, {ease: Elastic.easeOut, y: 0}, '-=2.7')
            .fromTo('.building6window1', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=3')
            .fromTo('.building6window2', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.7')
            .fromTo('.building6window3', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.4')
            .fromTo('.building6window4', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.3')
            .fromTo('.building6window5', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.3')
            .fromTo('.building6window6', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.3')
            .fromTo('.building1', 1.5, {y: 80},  {ease: Elastic.easeOut, y: 0}, '-=1.8')
            .fromTo('.building1window1', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=2.5')
            .fromTo('.building1window2', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.7')
            .fromTo('.building1window3', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.4')
            .fromTo('.building1window4', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.3')
            .fromTo('.building1window5', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.3')
            .fromTo('.building1window6', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.3')
            .fromTo('.building2', 1.5, {y: 80},  {ease: Elastic.easeOut, y: 0}, '-=2.2')
            .fromTo('.building2window1', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=0.7')
            .fromTo('.building2window2', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.5')
            .fromTo('.building2window3', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.4')
            .fromTo('.building2window4', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.3')
            .fromTo('.building4', 1.5, {y: 90},  {ease: Elastic.easeOut, y: 0}, '-=2.4')
            .fromTo('.building4window1', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.7')
            .fromTo('.building4window2', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.5')
            .fromTo('.building4window3', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.4')
            .fromTo('.building4window4', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.3')
            .fromTo('.building4window1', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=2.5')
            .fromTo('.building4window2', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.7')
            .fromTo('.building4window3', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.4')
            .fromTo('.building4window4', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.3')
            .fromTo('.building4window5', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.3')
            .fromTo('.building4window6', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.3')
            .fromTo('.building3', 1.5, {y: 80},  {ease: Elastic.easeOut, y: 0}, '-=2.7')
            .fromTo('.building3window1', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=2.7')
            .fromTo('.building3window2', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.5')
            .fromTo('.building3window3', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.4')
            .fromTo('.building3window4', 1.5, {y: -60}, {ease: Elastic.easeOut, y: 0}, '-=1.3')
            .fromTo('.walls',      .2, {y: 80},  {ease: Elastic.noease, y: 0}, '-=1.7')
            .fromTo('.door',       .2, {y: 80},  {ease: Elastic.noease, y: 0}, '-=1.5')
            .fromTo('.window',     .2, {scale: 0},  {ease: Elastic.noease, scale: 1}, '-=.5')
            .fromTo('.roof',      .6, {y: -80}, {ease: Bounce.easeOut, y: 0}, '-=1.5')
            .fromTo('.chimney',   .6, {y: -80}, {ease: Bounce.easeOut, y: 0}, '-=1.5')
            .fromTo('.doorknob',  1.5, {y: 50},  {ease: Elastic.easeOut, y: 0}, '+=.5')
            .set('.bush', {x: '85%', y: '100%'}, '-=2.9')
            .fromTo('.bush',         1, {scale: 0}, {ease: Elastic.easeOut, transformOrigin: 'bottom right', scale: 1}, '-=2.9')
            .fromTo('.tree1trunk', 0.3, {y: 50},    {ease: Power0.easeOut, y: 0}, '-=2.6')
            .fromTo('.tree2trunk', 0.3, {y: 50},    {ease: Power0.easeOut, y: 0}, '-=2.6')
            .fromTo('.tree3trunk', 0.3, {y: 50},    {ease: Power0.easeOut, y: 0}, '-=2.6')
            .fromTo('.tree1crown', 1,   {scale: 0}, {ease: Elastic.easeOut, scale: 1}, '-=2.5')
            .fromTo('.tree2crown', 1,   {scale: 0}, {ease: Elastic.easeOut, scale: 1}, '-=2.5')
            .fromTo('.tree3crown', 1,   {scale: 0}, {ease: Elastic.easeOut, scale: 1}, '-=2.5');
    }

    render() {
        return (
            <HouseSVG className={'house'}/>
        )
    }
}

export default House;
