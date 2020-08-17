import React from 'react';
import './App.css';
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Board from "./components/game/Board"
// import DataService from './service/DataService';

function App() {

  // const showBoard = () => {
  //   DataService.getBoard()
  //       .then(res => console.log(res))
  //       .catch(error => console.log(error))
  // }

  return (
    <div className="App">
      {/* <Header />
      <Welcome /> */}
      <Board />
    </div>
  );
}

export default App;
