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

        const windows = (building, count) => {
          const windows =  new Array(count);
          return windows.fill('j').map((value, index) => `.building${building}window${index+1}`)
        };

        const buildings = new TimelineMax({delay: 1});
        const build1wind = windows(1, 6);
        const build2wind = windows(2, 4);
        const build3wind = windows(3, 4);
        const build4wind = windows(4, 6);
        const build5wind = windows(5, 4);
        const build6wind = windows(6, 6);
        const treeTrunks = ['.tree1trunk','.tree2trunk','.tree3trunk'];
        const treeCrowns = ['.tree1crown','.tree2crown','.tree3crown'];

        buildings
            .from('.building5',      1.5, {y:  80, ease: Elastic.easeOut})
            .staggerFrom(build5wind, 1.5, {y: -60, ease: Elastic.easeOut}, 0.2, '-=1')
            .from('.building6',      1.5, {y:  80, ease: Elastic.easeOut}, '-=2.7')
            .staggerFrom(build6wind, 1.5, {y: -60, ease: Elastic.easeOut}, 0.2, '-=1.7')
            .from('.building1',      1.5, {y:  80, ease: Elastic.easeOut}, '-=1.8')
            .staggerFrom(build1wind, 1.5, {y: -60, ease: Elastic.easeOut}, 0.2, '-=1.3')
            .from('.building2',      1.5, {y:  80, ease: Elastic.easeOut}, '-=2.2')
            .staggerFrom(build2wind, 1.5, {y: -60, ease: Elastic.easeOut}, 0.2, '-=1.5')
            .from('.building4',      1.5, {y:  90, x: -10, ease: Elastic.easeOut}, '-=3.3')
            .staggerFrom(build4wind, 1.5, {y: -60, ease: Elastic.easeOut}, 0.2, '-=1.3')
            .from('.building3',      1.5, {y:  80, x: 10, ease: Elastic.easeOut}, '-=4.5')
            .staggerFrom(build3wind, 1.5, {y: -60, ease: Elastic.easeOut}, 0.2, '-=2.4')
            .from('.walls',    0.2, {y: 80,  ease: Elastic.noease}, '-=1.7')
            .from('.door',     0.2, {y: 80,  ease: Elastic.noease}, '-=1.5')
            .from('.window',   0.2, {scale: 0,  ease: Elastic.noease}, '-=.5')
            .from('.roof',     1.3, {y: -80, ease: Bounce.easeOut}, '-=1.5')
            .from('.chimney',  0.3, {y: -80, ease: Power0.easeOut}, '-=0.1')
            .from('.doorknob', 1.5, {y: 50,  ease: Elastic.easeOut}, '+=.5')
            .set('.bush', {x: '85%', y: '100%'}, '-=2.9')
            .fromTo('.bush', 1, {scale: 0}, {ease: Elastic.easeOut, transformOrigin: 'bottom right', scale: 1}, '-=2.9')
            .staggerFrom(treeTrunks, 0.3, {y: 50, ease: Power0.easeOut}, 0.1, '-=2.8')
            .staggerFrom(treeCrowns, 1.0, {scale: 0, ease: Elastic.easeOut}, 0.1, '-=2.7');
    }

    render() {
        return (
            <HouseSVG className={'house'}/>
        )
    }
}

export default House;
