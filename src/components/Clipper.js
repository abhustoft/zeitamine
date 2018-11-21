import React, {Component} from 'react';
import TweenMax from "gsap/TweenMax";

import '../App.css';
import ClipperSVG from '../svg/clipper.svg';

class Clipper extends Component {
    componentDidMount() {
        TweenMax.to("#theSquare", 1, {attr:{x:0},repeat:-1, yoyo:true});
    }

    render() {
        return (
            <ClipperSVG className={'clipper'}/>
        )
    }
}

export default Clipper;
