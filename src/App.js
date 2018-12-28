import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {TransitionGroup, Transition} from "react-transition-group";
import {play, exit} from './timelines'
import './App.css';
import Nav from './Nav'
import House from './components/House';
import SPEye from './components/SPEye/SPeye';

// From: https://css-tricks.com/animating-between-views-in-react/

const full = () => (
    <h1>
        <h2 className='content'>Title</h2>
        <div className='content--inner'>content--inner</div>
        <div className='content--inner'>content--inner</div>
        <div className='content--inner'>content--inner</div>
    </h1>
);
const home = () => (
    <h1>
        <div>home</div>
    </h1>
);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Nav/>
                    <Route render={(location) => {
                        const key = location.location.key;
                        const pathname = location.location;
                        console.log('Route render pathname:', pathname)
                        console.log('Route render key:', key)
                        return (
                            <TransitionGroup component={null}>
                                <Transition
                                    key={key}
                                    appear={true}
                                    onEnter={(node, appears) => {
                                        console.log('onEnter');
                                        return play(pathname, node, appears)
                                    }}
                                    onExit={(node, appears) => {
                                        console.log('onExit');
                                        exit(node, appears)
                                    }}
                                    timeout={{enter: 750, exit: 150}}
                                >
                                    <Switch location={pathname}>
                                        <Route exact path="/" component={home}/>
                                        <Route path="/eye" component={SPEye}/>
                                        <Route path="/full" component={full}/>
                                        <Route path="/house" component={House}/>
                                    </Switch>
                                </Transition>
                            </TransitionGroup>
                        );
                    }}
                    />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
