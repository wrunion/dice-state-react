import React, { Component } from 'react';
import './Counter.css';

export default class Counter extends Component {
  state = {
    count: 0
  }

  increment = () => {
    this.setState({count: this.state.count + 1});
  };

  decrement = () => {
    this.setState(state => ({
      count: state.count -1
    }));
  }

  render() {
    return (
      <div className="Counter">
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span className="count">{this.state.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    );
  }
}
