import React, {Component} from 'react';
import TweenMax, {Power0} from "gsap/TweenMax";

import './SPEye.css';
import SPEyeSVG from './speye.svg';
import SPEyeBottom from "./speyeBottom.svg";


class SPEye extends Component {
    constructor(props) {
        super(props);
        this.blink = () => {
            TweenMax.to(['.eyeMask'], 0.2, {
                // scale: 0,
                delay: .2,
                x: -40,
                y: -40,
                repeat: 1,
                repeatDelay: 0.15,
                ease: Power0.easeInOut,
                yoyo:true,
            });
        };
    }

    componentDidMount() {
        this.blink();
    }

    render() {
        return (
            <div className='SPEye' onClick={this.blink}>
                <SPEyeBottom className={'eyeBall'}/>
                <SPEyeSVG className={'pupil'}/>
            </div>
        )
    }
}

export default SPEye;
