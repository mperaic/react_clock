import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import ColoredBlock from './ColoredBlock.js';

let time = new Date().toLocaleString();

class App extends React.Component {
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>        
      </header>
      <p className="App-intro">
        Hi {this.props.name}!
      </p>
       <Clock ></Clock>
       <ColoredBlock ></ColoredBlock>
    </div>
  );
  }
}

export default App;
