import React, {Component} from 'react';
import TweenMax, {Elastic} from "gsap/TweenMax";

import './App.css';
import House from './House';

class App extends Component {

    render() {

        const toggle = (e) => {
            const classes = e.currentTarget.classList;
            const content = document.getElementsByClassName('content');

            if(!classes.contains('closed')) {
                TweenMax.to(content, 0.5, {height:0});
                classes.toggle("closed");
            } else {
                TweenMax.set(content, { ease: Elastic.easeOut, height:"auto"});
                TweenMax.from(content, 2, { ease: Elastic.easeOut, height:0});
                classes.toggle("closed");
            }
        };

        return (
            <div className="App">
                <header className="App-header">
                    <House />
                    {/*<div className={'expander'}>*/}
                        {/*<button className={'button closed'} onClick={toggle}>*/}
                            {/*Button*/}
                        {/*</button>*/}
                        {/*<div className={'content'}>*/}
                            {/*<div>Got some text</div>*/}
                            {/*<div>Got some text</div>*/}
                            {/*<div>Got some text</div>*/}
                            {/*<div>Got some text</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </header>
            </div>)
    }
}

export default App;
