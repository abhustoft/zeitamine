import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import anime from "animejs";

class App extends Component {

    componentDidMount() {
        anime({
            targets: 'p',
            translateX: [
                {value: 100, duration: 1200},
                {value: 0, duration: 800}
            ],
            rotate: '1turn',
            backgroundColor: '#111',
            color: '#444',
            duration: 2000,
            loop: false
        });

        anime({
            targets: ['.husTak, .husVegger'],
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutCubic',
            duration: 2000,
            begin: function(anim) {
                document.querySelector('.husTak').setAttribute("fill", "none");
            },
            complete: function() {
                document.querySelector('.husTak').setAttribute("fill", "yellow");
                document.querySelector('.husTak').setAttribute("stroke", "red");
                document.querySelector('.husVegger').setAttribute("fill", "red");
                document.querySelector('.treStamme').setAttribute("fill", "green");
                document.querySelector('.treKrone').setAttribute("fill", "blue");
                document.querySelector('.treGren1').setAttribute("fill", "blue");
                document.querySelector('.treGren2').setAttribute("fill", "blue");
                document.querySelector('.plen1').setAttribute("fill", "red");
                document.querySelector('.plen2').setAttribute("fill", "yellow");
            }
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <svg width="170.1px" height="170.1px">
                        <path className={'treStamme'} fill="#008A00" d="M134.9,122.9h-4V58.6c0-0.8,0.6-1.4,1.4-1.4h1.2c0.8,0,1.4,0.6,1.4,1.4V122.9z"/>
                        <path className={'treKrone'}  fill="#008A00" d="M148.1,87.1c0,0-0.1,0-0.1,0l-3,0c-0.8,0-1.4-0.6-1.4-1.4l0-1.2c0-0.8,0.6-1.4,1.4-1.4l3,0c0,0,0.1,0,0.1,0 c9.7,0,17.7-7.8,17.7-17.4c0-4.7-1.8-9.1-5.1-12.4c-3.3-3.3-7.8-5.2-12.5-5.2l-2,0l0-1.7c0-3.1-0.9-6.1-2.9-8.5 c-2.5-3-6.1-4.7-9.9-4.8h-0.1c-2,0-4.1,0.4-5.9,1.4c-4.4,2.4-6.9,6.7-7,11.4l0,2l-2,0c-6.2,0-11.8,3.1-15.2,8.6 c-0.8,1.2-1.3,2.6-1.7,4c-3.2,11.7,5.5,22.3,16.8,22.4l2.3,0c0.8,0,1.4,0.6,1.4,1.4l0,1.2c0,0.8-0.6,1.4-1.4,1.4l-1.8,0 c-11.9-0.1-22.1-9.8-22-21.7c0-5.7,2.3-11.1,6.4-15.1c3.6-3.6,8.3-5.7,13.3-6.1c0.4-3.8,2.1-7.3,4.9-10c3.2-3.2,7.4-4.9,11.9-4.9 c4.5,0,8.7,1.8,11.9,5c2.7,2.7,4.4,6.2,4.8,10c5.1,0.5,9.8,2.6,13.4,6.3c4.1,4.1,6.3,9.5,6.3,15.2C169.8,77.5,160,87.1,148.1,87.1z"/>
                        <path className={'treGren1'}  fill="#008A00" d="M134,74.5l-2.4-3.2l8.7-6.6c0.6-0.5,1.5-0.3,2,0.3L143,66c0.5,0.6,0.3,1.5-0.3,2L134,74.5z"/>
                        <path className={'treGren2'}  fill="#008A00" d="M131.5,81.2l-7.7-7.2c-0.6-0.5-0.6-1.4-0.1-2l0.8-0.9c0.5-0.6,1.4-0.6,2-0.1l7.7,7.2L131.5,81.2z"/>
                        <path className={'plen1'}     fill="#008A00" d="M23.1,123.5H1.4c-0.8,0-1.4-0.6-1.4-1.4v-1.2c0-0.8,0.6-1.4,1.4-1.4h21.7V123.5z"/>
                        <path className={'plen2'}     fill="#008A00" d="M168.7,123.5H84.5v-4h84.2c0.8,0,1.4,0.6,1.4,1.4v1.2C170.1,122.9,169.4,123.5,168.7,123.5z"/>
                        <path className={'husTak'}    fill="#002776" d="M11.2,98.7l-0.8-1c-1-1.2-0.8-3,0.5-4l40.4-31.9c2.1-1.7,5.1-1.6,7.1,0.1l5.4,4.4v-0.8 c0-3.1,2.5-5.7,5.7-5.7h11.2c3.1,0,5.7,2.5,5.7,5.7v19.2l11.2,9c1.2,1,1.4,2.8,0.4,4l-0.8,1c-1,1.2-2.8,1.4-4,0.4L79.2,88.1V66.8 h-8.5v14.2L54.7,68L15.2,99.2C14,100.2,12.2,100,11.2,98.7z"/>
                        <path className={'husVegger'} fill="#002776" d="M79.3,99.3v34.3H28.9V99.7l-7,5.5v29.7c0,3.1,2.5,5.7,5.7,5.7h53.1c3.1,0,5.7-2.5,5.7-5.7V105L79.3,99.3z"/>
                    </svg>
                    <p className={'hererjeg'}> her er er jeg</p>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
