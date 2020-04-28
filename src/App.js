import React from 'react';
import Die from './Die';
import './App.css';

function App() {
  return (
    <div className="App">
      <Die 
      face="five"
      />
      <Die face="two" />
      <Die face="three" />
    </div>
  );
}

export default App;
