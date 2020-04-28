import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    return (
      <React.Fragment>
        <i className={`Die fas fa-dice-${this.props.face}`}></i>
      </React.Fragment>
    );
  }
}

export default Die;