import React from 'react';
import './App.css';
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Board from "./components/game/Board"

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Welcome /> */}
      <Board />
    </div>
  );
}

export default App;
