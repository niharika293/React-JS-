import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Welcome from './Components/Welcome';
import Greet, { Greet2 } from './Components/greet';
import Hello from './Components/Hello';

function App() {
  return (
    <div className="App">
      {/* <Welcome/>
     <Greet/> */}
     {/* <Greet2/> */}
     <Hello/>
    </div>
  );
}

export default App;
