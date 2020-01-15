import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
        counter: 0
    };
  }
  render() {
    return (
        <div data-test="component-app">
            <h1 data-test="counter-display">The conter is currently {this.state.counter}</h1>
            <button
                onClick={() => this.setState({counter: this.state.counter + 1})}
                data-test="increment-button">Increment counter</button>
            <button
                onClick={() => this.setState({counter: this.state.counter - 1})}
                data-test="decrement-button">Decrement counter</button>
        </div>
    );
  }

}

export default App;
