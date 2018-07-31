import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator'
import Hello from "./Hello";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Calculator/>
                <Hello/>
            </div>
        );
    }
}

export default App;
