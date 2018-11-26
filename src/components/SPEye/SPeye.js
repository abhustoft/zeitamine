import React, {Component} from 'react';
import {Power0} from "gsap/TweenMax";

import './SPEye.css';
import SPEyePupil from './SPEyePupil.svg';
import SPEyeBall from "./SPEyeBall.svg";
import TimelineMax from "gsap/TimelineMax";


class SPEye extends Component {
    constructor(props) {
        super(props);
        this.blink = () => {
            const bat = new TimelineMax({delay: 0.1});
            bat
                .to('.eyeMask', 0.01, {x: 1.5, rotation: -60, transformOrigin: '50% 50%'})
                .to('.eyeMask', 0.12, {
                    skewY: "-80deg", transformOrigin: '50% 50%',
                    skewX: "-10deg",
                    rotation: -10,
                    ease: Power0.easeInOut,
                }, '+=0.1')
                .to('.eyeMask', 0.2, {
                    skewY: "0deg", transformOrigin: '50% 50%',
                    skewX: "0deg",
                    rotation: -50,
                    ease: Power0.easeInOut,
                }, '+=0.1');
        };
    }

    componentDidMount() {
        this.blink();
    }

    render() {
        return (
            <div className='SPEye' onClick={this.blink}>
                <SPEyeBall className={'eyeBall'}/>
                <SPEyePupil className={'pupil'}/>
            </div>
        )
    }
}

export default SPEye;
