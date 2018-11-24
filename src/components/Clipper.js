import React, {Component} from 'react';
import TweenMax, {Power0} from "gsap/TweenMax";

import './Clipper.css';
import ClipperSVG from '../svg/clipper.svg';
import ClipperBottom from '../svg/clipperBottom.svg';

class Clipper extends Component {
    componentDidMount() {

        TweenMax.to(['.circleMask'], 0.3, {
            // scale: 0,
            delay: 1,
            x: -110,
            y: -110,
            repeat: -1,
            repeatDelay: 0.2,
            ease: Power0.easeNone,
            yoyo:true,
        });
    }

    render() {
        return (
            <div className='circle'>
                <ClipperSVG className={'clipper'}/>
                <ClipperBottom className={'clipperBottom'}/>
            </div>
        )
    }
}

export default Clipper;
