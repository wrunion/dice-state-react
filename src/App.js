/* eslint-disable default-case */
/* eslint-disable no-unused-vars */
import React from 'react';
// import RollDice from './RollDice';
import Counter from './Counter/Counter';
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  console.log('reducer', action);
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count -1
      }  ;
    default: 
      return state;
  }
}

const store = createStore(reducer);
// console.log('created', store.getState());
// store.dispatch({type: 'INCREMENT'});
// console.log(store.getState());
// store.dispatch({type: 'INCREMENT'});
// console.log(store.getState());
// store.dispatch({type: 'DECREMENT'});
// console.log(store.getState());
// store.dispatch({type: 'INCREMENT'});
// console.log('done', store.getState());




function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
