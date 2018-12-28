import {TimelineMax as Timeline, Power1} from 'gsap';

const getDefaultTimeline = (node, delay) => {
    const timeline = new Timeline({paused: true});
    const content = node.querySelector('.content');
    const contentInner = node.querySelector('.content--inner');

    console.log('getHomeTimeline for:', content)
    console.log('getHomeTimeline for:', contentInner)
    timeline
        .from(node, 0.3, {display: 'none', autoAlpha: 0, delay, ease: Power1.easeIn})
        .from(content, 0.15, {autoAlpha: 0, y: 25, ease: Power1.easeInOut})
        .from(contentInner, 0.15, {autoAlpha: 0, delay: 0.15, ease: Power1.easeIn});

    return timeline;
}

const getHomeTimeline = (node, delay) => {
    const timeline = new Timeline({paused: true});
    const texts = node.querySelectorAll('h1 > div');
    console.log('getHomeTimeline for:', texts)
    timeline
        .from(node, 0, {display: 'none', autoAlpha: 0, delay})
        .staggerFrom(texts, 0.375, {autoAlpha: 0, x: -25, ease: Power1.easeOut}, 0.125);

    return timeline;
};

export const play = (pathname, node, appears) => {
    const delay = appears ? 0 : 0.5;
    let timeline;
    console.log('play-ing:', pathname, node)

    //if (pathname.pathname === '/')
        timeline = getHomeTimeline(node, delay);
    //else
    //    timeline = getDefaultTimeline(node, delay);

    console.log('play has a timeline', timeline)
    //timeline.play();

    window
        .loadPromise
        .then(() => requestAnimationFrame(() => {
                console.log('loaded promise play:', timeline);
                return timeline.play();
            }
        ))
}

export const exit = (node) => {
    console.log('exit-ing:', node)
    const timeline = new Timeline({paused: true});

    console.log('exit-ing:', node)
    timeline.to(node, 0.15, {autoAlpha: 0, ease: Power1.easeOut});
    timeline.play();
}
