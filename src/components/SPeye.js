import React, {Component} from 'react';
import TweenMax, {Power0} from "gsap/TweenMax";

import '../App.css';
import SPeyeSVG from '../svg/speye.svg';

class SPEye extends Component {
    componentDidMount() {
        TweenMax.to(['.innerEye'], 18, {
            skewY: "-50deg",
            skewX: "-60deg",
            scale: 0,
            delay: 1,
            x: 11,
            y: 11,
            repeat: -1,
            repeatDelay: 2,
            ease: Power0.easeNone,
            yoyo:true,
        });

        TweenMax.from(['.upperOneRed'], 1, {
            y: 33,
            delay: 1,
            repeat: -1,
            repeatDelay: 2,
            ease: Power0.easeNone,
            yoyo:true,
        });
    }

    render() {
        return (
            <SPeyeSVG className={'speye'}/>
        )
    }
}

export default SPEye;
