import React, {Component} from 'react';
import TweenMax, {Power0} from "gsap/TweenMax";

import './SPeye.css';
import SPeyeSVG from '../svg/speye.svg';
import SPEyeBottom from "../svg/speyeBottom.svg";

class SPEye extends Component {
    componentDidMount() {
        TweenMax.to(['.eyeMask'], 0.3, {
            // scale: 0,
            delay: 1,
            x: -40,
            y: -40,
            repeat: -1,
            repeatDelay: 0.2,
            ease: Power0.easeNone,
            yoyo:true,
        });
    }

    render() {
        return (
            <div className='SPeye'>
                <SPeyeSVG className={'speye'}/>
                <SPEyeBottom className={'speyeBottom'}/>
            </div>
        )
    }
}

export default SPEye;
