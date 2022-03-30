import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Welcome from './Components/Welcome';
import Greet, { Greet2 } from './Components/greet';

function App() {
  return (
    <div className="App">
      <Welcome/>
     <Greet/>
     {/* <Greet2/> */}
    </div>
  );
}

export default App;
