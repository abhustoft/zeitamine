import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { TransitionGroup, Transition } from "react-transition-group";
import { play, exit } from './timelines'
import './App.css';
// import House from './components/House';
// import SPEye from './components/SPEye/SPeye';

const dull = () => (<div>dull</div>);
const full = () => (<div>full</div>);

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Route render={(location) => {
                        const {key} = location;
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
                                        <Route exact path="/" component={dull}/>
                                        <Route path="/eye" component={full}/>
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
