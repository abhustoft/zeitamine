import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {TransitionGroup, Transition} from "react-transition-group";
import {play, exit} from './timelines'
import './App.css';
import Nav from './Nav'
// import House from './components/House';
// import SPEye from './components/SPEye/SPeye';

const dull = () => (<h1>
    <div>dull</div>
</h1>);
const full = () => (<h1>
    <div>full</div>
</h1>);
const hull = () => (<h1>
    <div>hull</div>
</h1>);

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
                                        <Route exact path="/" component={dull}/>
                                        <Route path="/eye" component={full}/>
                                        <Route path="/house" component={hull}/>
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
