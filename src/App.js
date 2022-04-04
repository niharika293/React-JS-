import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import Welcome from './Components/Welcome';
import Greet, { Greet2 } from './Components/greet';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Welcome/> */}
     {/* <Greet name = "Bruce" heroName="superman" > 
      <p>This is children props.</p>
     </Greet> 
     <Greet name = "Mario" heroName ="luigi"> 
      <button>Action</button>
     </Greet> 
     <Greet name = "Ironman" heroName ="Tony Stark" /> 
      <Welcome name = "Ironman" heroName ="Tony Stark" /> */}
      {/* <Greet2/> */}
     {/* <Hello/> */}
     {/* <Message/> */}
     <Counter/>
    </div>
  );
}

export default App;
