import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Greet name="Batman" trait="dynamism">
        <p>This is props.children</p>
      </Greet>
      <Greet name="Robin" trait="agility">
        <button>Action</button>
      </Greet>
      <Greet name="Penguin" trait="creepiness" />
      <Welcome name="Batman" trait="dynamism"/>
      <Welcome name="Robin" trait="agility"/>
      <Welcome name="Penguin" trait="creepiness"/>
      {/* <Hello /> */}
      {/* <Message /> */}
      <Counter/>
    </div>
  );
}

export default App;