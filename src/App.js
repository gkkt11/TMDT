import React, { Component } from 'react';
import Header from './header';
import Body from './body';
import './App.css';

class App extends Component {
  render(){
  return (
    <div className="App">
      <Header></Header>
      <Body></Body>
    </div>
  );
  }
}

export default App;
