import React, {Component} from 'react';
import TweenMax, {Power0} from "gsap/TweenMax";

import './SPeye.css';
import SPeyeSVG from './speye.svg';
import SPEyeBottom from "./speyeBottom.svg";

class SPEye extends Component {
    componentDidMount() {
        TweenMax.to(['.eyeMask'], 0.2, {
            // scale: 0,
            delay: 3,
            x: -40,
            y: -40,
            repeat: 1,
            repeatDelay: 0.15,
            ease: Power0.easeInOut,
            yoyo:true,
        });
    }

    render() {
        return (
            <div className='SPeye'>
                <SPEyeBottom className={'speyeBottom'}/>
                <SPeyeSVG className={'speye'}/>
            </div>
        )
    }
}

export default SPEye;
