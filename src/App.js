import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {TransitionGroup, Transition} from "react-transition-group";
import {play, exit} from './timelines'
import './App.css';
import Nav from './Nav'
import House from './components/House';
import SPEye from './components/SPEye/SPeye';

// From: https://css-tricks.com/animating-between-views-in-react/
const BottomUp = () => (
    <h1>
        <h2 className='content'>From bottom</h2>
        <div className='content--inner'>From</div>
        <div className='content--inner'>the</div>
        <div className='content--inner'>bottom</div>
        <div className='content--inner'>up</div>
    </h1>
);
const FromSide = () => (
    <h1>
        <div>Home</div>
        <div>sweet</div>
        <div>home</div>
        <div>Alabama</div>
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
                        return (
                            <TransitionGroup component={null}>
                                <Transition
                                    key={key}
                                    appear={true}
                                    onEnter={(node, appears) => play(pathname, node, appears)}
                                    onExit={(node, appears) => exit(node, appears)}
                                    timeout={{enter: 750, exit: 150}}
                                >
                                    <Switch location={pathname}>
                                        <Route exact path="/" component={FromSide}/>
                                        <Route path="/full" component={BottomUp}/>
                                        <Route path="/eye" component={SPEye}/>
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
